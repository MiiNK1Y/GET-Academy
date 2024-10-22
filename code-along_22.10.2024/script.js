// model
const model = {
    app: {
        html: document.getElementById("app"),
    },

    input: {
        transferIDFrom: null,
        transferAmountFrom: null,
        transferIDTo: null,
        transferAmountTo: null,
    },

    data: { 
        accounts: [
            {
                id: 0,
                amount: 100,
            },
            {
                id: 1,
                amount: 100,
            },
            {
                id: 3,
                amount: 100,
            },
        ],
    },
}

// view
updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        <div>
            <h1>Bank</h1>
            <button onclick="addAccount()">Legg til konto</button>
            <button onclick="removeAccount()">Slett konto</button>
        </div>
        <div>
            <h1>Kontoer</h1>
            <div>
                ${getAccounts()}
            </div>
        </div>
        <div>
            <h1>Overfør fra / til</h1>
            <div>
                <input
                    type="number"
                    placeholder="from account id"
                    value="${model.input.transferIDFrom = this.value}"
                />
                <input
                    type="number"
                    placeholder="write amount"
                    value="${model.input.transferAmountFrom = this.value}"
                />
            </div>
            <input
                id="transfer_id_to"
                type="number"
                placeholder="to account id"
                value="${model.input.transferIDTo = this.value}"
            />
            <button
                onclick="transfer()">Transfer
            </button>
    `;
}

function getAccounts() {
    let html = "";
    const accountsData = model.data.accounts;
    for (const [key, value] in Object.entries(accountsData)) {
        let template = /*HTML*/ `
            <div>
                Account id: ${key}
            </div>
            <div>
                Account amount: ${value}
            </div>
        `;

        html += template;
    }

    return html;
}

// contoller
function transfer() {
    const fromId = model.input.transferIDFrom;
    const fromAmount = model.input.transferAmountFrom;
    const toId = model.input.transferIDTo;

    model.data.accounts[fromId].amount -= fromAmount;
    model.data.accounts[toId].amount += fromAmount;

    updateView();
}

/*
Nettbank
Kunden ønsker at du lager en nettbank!
Brukere skal kunne:
- Lage nye kontoer
- Slette kontoer
- Overføre til andre kontoer
- Betale regninger
*/
