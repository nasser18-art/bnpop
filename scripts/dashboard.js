document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in
    const accountStatus = sessionStorage.getItem('accountStatus');
    const username = sessionStorage.getItem('username');
    const userFullName = sessionStorage.getItem('userFullName') || 'Client';
    const accountBalance = sessionStorage.getItem('accountBalance') || '2411021.00';
    const clientNumber = sessionStorage.getItem('clientNumber') || '8392746157';

    if (!accountStatus || accountStatus !== 'active') {
        window.location.href = 'index.html';
        return;
    }

    // Set user information
    document.getElementById('user-name').textContent = userFullName;
    const cardHolderNames = document.querySelectorAll('.card-name');
    cardHolderNames.forEach(name => {
        name.textContent = userFullName.toUpperCase();
    });

    // Format and display balance
    const formattedBalance = formatCurrency(accountBalance);
    document.getElementById('main-balance').textContent = formattedBalance;
    // document.getElementById('modal-balance').textContent = formattedBalance;
    // document.getElementById('modal-unlock-amount').textContent = formattedBalance;
    document.getElementById('modal-holder-name').textContent = userFullName;
    document.getElementById('modal-client-number').textContent = clientNumber;

    // Set current date for block date
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR') + ' - ' + now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    // document.getElementById('modal-block-date').textContent = dateStr;

    // Function to format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    }

    // Function to show blocked modal
    function showBlockedModal() {
        const modal = document.getElementById('blocked-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close blocked modal
    window.closeBlockedModal = function () {
        const modal = document.getElementById('blocked-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Add click event to all buttons with data-action attribute
    document.querySelectorAll('[data-action]').forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');

            // Don't show modal for filter buttons
            if (action === 'all' || action === 'virements' || action === 'cartes' || action === 'prelevements') {
                handleFilter(action);
                return;
            }

            // Show blocked modal for all other actions
            showBlockedModal();
        });
    });

    // Handle filter buttons
    function handleFilter(filter) {
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });

        // Filter transactions
        const transactions = document.querySelectorAll('.transaction-item');
        transactions.forEach(transaction => {
            const type = transaction.getAttribute('data-type');
            if (filter === 'all') {
                transaction.style.display = 'flex';
            } else if (filter === 'virements' && type === 'virement') {
                transaction.style.display = 'flex';
            } else if (filter === 'cartes' && type === 'carte') {
                transaction.style.display = 'flex';
            } else if (filter === 'prelevements' && type === 'prelevement') {
                transaction.style.display = 'flex';
            } else {
                transaction.style.display = 'none';
            }
        });
    }

    // Navigation items
    const navItems = document.querySelectorAll('.nav-item[data-action]');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show blocked modal
            showBlockedModal();
        });
    });

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                sessionStorage.clear();
                window.location.href = 'index.html';
            }
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('blocked-modal');
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeBlockedModal();
        }
    });

    // Add ESC key to close modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeBlockedModal();
        }
    });

    // Animate balance on load
    animateBalance();

    function animateBalance() {
        const balanceElement = document.getElementById('main-balance');
        const targetAmount = parseFloat(accountBalance);
        const duration = 2000;
        const steps = 60;
        const increment = targetAmount / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;

            if (step >= steps) {
                current = targetAmount;
                clearInterval(timer);
            }

            balanceElement.textContent = formatCurrency(current);
        }, duration / steps);
    }

    // Add hover effects to transaction items
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(8px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    // Show welcome notification
    setTimeout(() => {
        showNotification(`Bienvenue ${userFullName} !`, 'info');
    }, 1000);

    // Notification function
    function showNotification(message, type = 'info') {
        const existing = document.querySelectorAll('.notification-toast');
        existing.forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification-toast ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
            font-size: 14px;
            max-width: 350px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simulate live balance updates
    setInterval(() => {
        const balanceElements = document.querySelectorAll('.balance-amount');
        balanceElements.forEach(el => {
            if (el.id === 'main-balance') {
                // Subtle animation to show it's "live"
                el.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    el.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }, 15000); // Every 15 seconds
});
