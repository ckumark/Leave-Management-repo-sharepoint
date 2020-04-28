import * as React from "react";
import { IPolicyUploadProps } from "./IPolicyUploadProps";
import { sp } from "@pnp/sp";
import { Web } from "sp-pnp-js";
import LeavePoliciesAPI from "../api/LeavePolicies.API/LeavePoliciesAPI";
export default class PolicyUpload extends React.Component<
  IPolicyUploadProps,
  {}
> {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.filesave = this.filesave.bind(this);
  }
  private filesave() {
    var file = (document.querySelector("#newfile") as HTMLInputElement)
      .files[0];
    if (file != undefined || file != null) {
      // you can adjust this number to control what size files are uploaded in chunks
      if (file.size <= 10485760) {
        // small upload
        LeavePoliciesAPI.uploadLeavePolicies(
          this.props.context,
          "Company%20Policies/",
          file.name,
          file,
          true
        )
          .then((response) => {
            if (response) {
              console.log("File Uploaded");
            } else {
              console.log("File Upload Failed");
            }
          })
          .catch((error) => {
            console.log("File Upload Failed");
          });
      }
    }
  }

  public render(): React.ReactElement<IPolicyUploadProps> {
    return (
      <main>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col text-center">
              <h2>Leave Policies/calendar</h2>
            </div>

            {this.props.IsAdmin() && (
              <div>
                <h3> Upload Policies </h3>

                <input type="file" name="myFile" id="newfile" />
                <button onClick={this.filesave}>Upload File</button>
              </div>
            )}
            <div>Policies</div>
          </div>
        </div>
      </main>
    );
  }
}
