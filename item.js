
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f1f5f9;
    color: #1e293b;
}

header {
    background: #172554;
    color: white;
    text-align: center;
    padding: 28px 15px;
}

header h1 {
    margin-bottom: 8px;
}

header p {
    color: #cbd5e1;
    margin-bottom: 18px;
}

.qr-main-btn {
    background: #ffffff;
    color: #1d4ed8;
    padding: 13px 22px;
    border-radius: 9px;
    font-weight: bold;
    cursor: pointer;
    border: none;
}

.container {
    max-width: 1150px;
    margin: auto;
    padding: 25px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 18px;
    margin-bottom: 25px;
}

.stat {
    background: white;
    padding: 22px;
    border-radius: 12px;
    box-shadow: 0 3px 12px #00000008;
}

.stat h3 {
    color: #64748b;
    font-size: 14px;
}

.stat p {
    font-size: 27px;
    font-weight: bold;
    margin-top: 12px;
    color: #2563eb;
}

.panel {
    background: white;
    padding: 22px;
    border-radius: 12px;
    margin-bottom: 25px;
    box-shadow: 0 3px 12px #00000008;
}

.panel h2 {
    margin-bottom: 18px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 12px;
    border: 1px solid #dbe2ed;
    border-radius: 8px;
    outline: none;
}

input:focus {
    border-color: #2563eb;
}

button {
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.primary {
    background: #2563eb;
    color: white;
}

.secondary {
    background: #e8efff;
    color: #1d4ed8;
}

.danger {
    background: #fee2e2;
    color: #b91c1c;
}

.search {
    margin: 15px 0;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 18px;
}

.product {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5eaf2;
}

.product img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    background: #f8fafc;
    padding: 10px;
}

.product-info {
    padding: 16px;
}

.product-info h3 {
    margin-bottom: 10px;
}

.product-info p {
    margin: 7px 0;
    color: #64748b;
}

.actions {
    display: flex;
    gap: 8px;
    margin-top: 14px;
    flex-wrap: wrap;
}

#qrModal {
    display: none;
    position: fixed;
    inset: 0;
    background: #0009;
    z-index: 100;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

.modal {
    background: white;
    border-radius: 14px;
    padding: 25px;
    width: 100%;
    max-width: 420px;
    text-align: center;
}

#qrcode {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.modal button {
    margin: 6px;
}

.close {
    background: #e2e8f0;
    color: #1e293b;
}

.empty {
    text-align: center;
    color: #64748b;
    padding: 30px;
}

#qrLink {
    font-size: 12px;
    overflow-wrap: anywhere;
    color: #64748b;
}

@media(max-width:600px) {
    .container {
        padding: 14px;
    }

    .panel {
        padding: 16px;
    }
}