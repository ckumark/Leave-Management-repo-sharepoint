import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { InfoState } from "../Global/InfoState";
export interface IApprovalHistoryProps {
  digest: string;
  context: IWebPartContext;
  setMessage: (message: string, actionResponseState: InfoState) => void;
}
//# sourceMappingURL=IApprovalHistoryProps.d.ts.map
