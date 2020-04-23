import * as React from 'react';
import { IPolicyUploadProps } from './IPolicyUploadProps';

export default class PolicyUpload extends React.Component<IPolicyUploadProps, {}>{

    public render(): React.ReactElement<IPolicyUploadProps> {

        return (

            <main>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col text-center">
                            <h2>Upload Leave Policy/Leave calendar</h2>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}