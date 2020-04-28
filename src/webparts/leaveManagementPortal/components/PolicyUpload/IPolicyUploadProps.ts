import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { InfoState } from "../Global/InfoState";

export interface IPolicyUploadProps {
  digest: string;
  context: IWebPartContext;
  setMessage: (message: string, actionResponseState: InfoState) => void;
  IsAdmin: () => boolean;
}
