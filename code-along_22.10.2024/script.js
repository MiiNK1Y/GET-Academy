/*
Nettbank
Kunden ønsker at du lager en nettbank!
Brukere skal kunne:
- Lage nye kontoer
- Slette kontoer
- Overføre til andre kontoer
- Betale regninger
*/

// model ------------------------------------------------------------
const model = {
    app: {
        html: document.getElementById("app"),
    },

    input: {
        deleteAccountId: null,

        transfer: {
            fromId: null,
            amount: null,
            recipientId: null,
        },

        bill: {
            fromId: null,
            amount: null,
            recipient: null,
            kid: null,
        },
    },

    data: {
        awaitingId: 4, // this value is passed to the next new account.

        accounts: [
            {
                id: 1,
                amount: 1000,
            },
            {
                id: 2,
                amount: 1000,
            },
            {
                id: 3,
                amount: 1000,
            },
        ],
    },
}

// view -------------------------------------------------------------
updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${bankHtml()}
        ${getAccountsHtml()}
        ${transferHtml()}
        ${payBillHtml()}
    `;
}


function bankHtml() {
    const html = /*HTML*/`
        <h1>The fucking bank bro</h1>
        <button onclick="addAccount()">Add account</button>
        <div style="display: inline;">
            <input
                type="number"
                placeholder="delete id"
                oninput="model.input.deleteAccountId=this.value"
                value="${model.input.deleteAccountId ?? ''}"
            />
            <button onclick="removeAccount()">Delete account</button>
        </div>
    `;

    return html;
}


function transferHtml() {
    const html = /*html*/`
        <h1>Transfer</h1>
        <div>
            <input
                type="number"
                placeholder="from account id"
                oninput="model.input.transfer.fromId=this.value"
                value="${model.input.transfer.fromId ?? ''}"
            />
            <input
                type="number"
                placeholder="amount"
                oninput="model.input.transfer.amount=this.value"
                value="${model.input.transfer.amount ?? ''}"
            />
        </div>

        <input
            type="number"
            placeholder="to account id"
            oninput="model.input.transfer.recipientId=this.value"
            value="${model.input.transfer.recipientId ?? ''}"
        />
        <button onclick="transfer()">Transfer</button>
    `;

    return html;
}


function payBillHtml() {
    const html = /*HTML*/`
        <h1>Pay bill</h1>
        <div>
            <input
                type="number"
                placeholder="from account id"
                oninput="model.input.bill.fromId=this.value"
                value="${model.input.transfer.fromId ?? ''}"
            />
            <input
                type="number"
                placeholder="amount"
                oninput="model.input.bill.amount=this.value"
                value="${model.input.bill.amount ?? ''}"
            />
        </div>
        <div>
            <input
                type="number"
                placeholder="recipient"
                oninput="model.input.bill.recipient=this.value"
                value="${model.input.bill.recipient ?? ''}"
            />
            <input
                type="number"
                placeholder="kid"
                oninput="model.input.bill.kid=this.value"
                value="${model.input.bill.kid ?? ''}"
            />
        </div>
        <button onclick="payBill()">Pay</button>
    `;

    return html;
}


function getAccountsHtml() {
    const accountsData = model.data.accounts;

    let html = "<h1>Accounts</h1>";
    for (const val of accountsData) {

        const id = val.id;
        const amount = val.amount;

        const template = /*HTML*/ `
            <div>Account id: ${id}</div>
            <div>Account amount: ${amount}</div>
            <br>
        `;

        html += template;
    }

    return html;
}


// contoller --------------------------------------------------------
function transfer() {
    const from = Number(model.input.transfer.fromId);
    const to = Number(model.input.transfer.recipientId);
    const amount = Number(model.input.transfer.amount);

    const err = "Need transfer information!";
    try {
        if (from === 0 || to === 0 || amount === 0) {
            throw new RangeError(err);
        }
    } catch (RangeError) {
        alert(err);
        return;
    }

    const account = model.data.accounts;
    const indexOfFrom = account.findIndex(x => x.id === from);
    const indexOfTo = account.findIndex(x => x.id === to);

    // check if the account exists and if the balance exists.
    try {
        if (amount > Number(model.data.accounts[indexOfFrom].amount)) {
            alert("Your are trying to transfer more than the account holds!");
        } else {
            account[indexOfFrom].amount -= amount;
            account[indexOfTo].amount += amount;
        };
    } catch (TypeError) {
        alert("One of the accounts given does not exist!")
        return;
    }

    updateView();
};


function payBill() {
    const fromId = Number(model.input.bill.fromId);
    const amount = Number(model.input.bill.amount);
    const recipient = Number(model.input.bill.recipient);   // some bs input, goes nowhere...
    const kid = Number(model.input.bill.kid);               // some bs input, goes nowhere...

    const err = "Need payment information!";
    try {
        if (fromId === 0 || amount === 0 || recipient === 0 || kid === 0) {
            throw new RangeError(err);
        }
    } catch (RangeError) {
        alert(err);
        return;
    }

    const account = model.data.accounts;
    const indexOfFrom = account.findIndex(x => x.id === fromId);

    try {
        if (amount > account[indexOfFrom].amount) {
            alert("Your are trying to pay more than the account holds!");
        } else {
            account[indexOfFrom].amount -= amount;
        };
    } catch (TypeError) {
        alert("One of the accounts given does not exist!")
        return;
    }

    updateView();
}


function addAccount() {
    const waitingId = model.data.awaitingId;
    const accountModel = { id: waitingId, amount: 0 };

    model.data.accounts.push(accountModel);
    model.data.awaitingId++;

    updateView();
}


function removeAccount() {
    const accounts = model.data.accounts;
    const idToDelete = Number(model.input.deleteAccountId);

    const indexOfId = accounts.findIndex(x => x.id === idToDelete);

    if (indexOfId === -1) {
        alert("That account does not exist!");
    } else {
        accounts.splice(indexOfId, 1);
    }

    updateView();
}

