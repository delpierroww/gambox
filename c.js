// Initial balance in Rupiah
let balance = 1000000;

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('top-up-section').style.display = 'block';
        updateBalance();
    } else {
        alert('Please enter both username and password');
    }
}

// Function to handle diamond purchase
function buyDiamond() {
    const game = document.getElementById('game-select').value;
    const amount = parseInt(document.getElementById('diamond-amount').value);
    
    if (!game) {
        alert('Please select a game');
        return;
    }
    
    if (!amount || amount < 1) {
        alert('Please enter a valid amount of diamonds');
        return;
    }
    
    const cost = amount * 1000; // Assume 1 diamond costs 1000 Rupiah
    
    if (cost > balance) {
        alert('Insufficient balance');
        return;
    }
    
    balance -= cost;
    updateBalance();
    alert(`Successfully purchased ${amount} diamonds for ${game}. New balance: Rp ${balance}`);
}

// Function to update balance display
function updateBalance() {
    document.getElementById('balance').textContent = `Rp ${balance}`;
}

// Initialize balance display when the page loads
window.onload = updateBalance;
