<div class="options-page">
    <div class="options-log-container">
        <h2>Options Log List</h2>
        <ul class="options-log-list"></ul>
    </div>
    <div class="options-panel-container">
        <h2>Options</h2>
        <ul class="options-panel-list">
            <li>
                <span class="option-label">IP:</span>
                <input class="my-ip-input" type="text" value="{{ <~>hostInfo.address }}"></input>
            </li>
            <li>
                <span class="option-label">Broadcast IP:</span>
                <input class="broadcast-ip-input" type="text" value="{{ <~>hostInfo.broadcast}}"></input>
            </li>
            <li>
                <span class="option-label">Port:</span>
                <input class="my-ports-input" type="text" value="{{<~>hostInfo.serverPort}}"></input>
            </li>
            <li>
                <button class="random-port-button" onClick="{{randomizePort()}}">Random Port</button>
                <button class="test-port-button">Test Port</button>
            </li>
            <li>
                <span class="option-label">Target IP:</span>
                <input class="target-ip-input" type="text" value="{{<~>hostInfo.targetAddress}}"></input>
            </li>
            <li>
                <span class="option-label">Target Port(s):</span>
                <input class="target-ports-input" type="text" value="{{<~>hostInfo.targetPorts}}"></input>
            </li>
            <li>
                <button class="locate-target-button" onClick="{{locateTarget()}}">Locate Target</button>
            </li>
            <li>
                <button class="connect-button" onClick="{{connectToTarget()}}">Connect</button>
            </li>
        </ul>
    </div>
</div>