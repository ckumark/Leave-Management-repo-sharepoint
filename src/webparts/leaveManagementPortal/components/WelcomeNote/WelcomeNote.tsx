import * as React from 'react';
import { IWelcomeNoteProps } from './IWelcomeNoteProps';

export default class WelcomeNote extends React.Component<IWelcomeNoteProps, {}>{

    public render(): React.ReactElement<IWelcomeNoteProps> {

        return (
            <main>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col text-center">
                            <h2>Welcome {this.props.User.FullName}</h2>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}