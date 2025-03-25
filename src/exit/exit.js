import React from 'react';

class Exit extends React.Component {
    handleExit = () => {
        console.log("Exiting program...");
        window.close();
        process.exit(0);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleExit}>Exit Program</button>
            </div>
        );
    }
}

export default Exit;