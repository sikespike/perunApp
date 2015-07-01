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
                <input class="my-ip-input" type="text"></input>
            </li>
            <li>
                <span class="option-label">Port(s):</span>
                <input class="my-ports-input" type="text"></input>
            </li>
            <li>
                <button class="test-ports-button">Test Port(s)</button>
            </li>
            <li>
                <span class="option-label">Target IP:</span>
                <input class="target-ip-input" type="text"></input>
            </li>
            <li>
                <span class="option-label">Target Ports:</span>
                <input class="target-ports-input" type="text"></input>
            </li>
            <li>
                <button class="locate-target-button">Locate Target</button>
            </li>
            <li>
                <button class="connect-button"
                        data-complete-action="action: changeView, value:
            browserView">Connect
                </button>
            </li>
        </ul>
    </div>
</div>