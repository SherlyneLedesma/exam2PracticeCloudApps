document.addEventListener('DOMContentLoaded', () => {
    const addUserForm = document.getElementById('addUserForm');
    const userTableBody = document.getElementById('userTableBody');
    const refreshBtn = document.getElementById('refreshBtn');
    const timestampLabel = document.getElementById('timestamp');
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    // Fetch users and map fields exactly to match image layout rows
    async function loadUsers() {
        try {
            const response = await fetch('/api/users');
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'API Response Error');
            }

            userTableBody.innerHTML = ''; 

            if (result.data.length === 0) {
                userTableBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted small py-3">No matching records.</td></tr>`;
                return;
            }

            // Injected table content mapping
            result.data.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${escapeText(user.userID)}</td>
                    <td>${escapeText(user.lastname)}</td>
                    <td>${escapeText(user.firstname)}</td>
                    <td>${escapeText(user.email)}</td>
                    <td>${escapeText(user.username)}</td>
                    <td>${escapeText(user.passwds)}</td>
                `;
                userTableBody.appendChild(tr);
            });

            // Update live metadata sync string timestamp matching screen snippet formatting
            const now = new Date();
            timestampLabel.textContent = `Updated: ${now.toString().split(' GMT')[0]} GMT${now.toString().match(/([-\+]\d+)/)?.[0] || ''} (${Intl.DateTimeFormat().resolvedOptions().timeZone.replace('_', ' ')})`;

        } catch (err) {
            console.error(err);
            userTableBody.innerHTML = `<tr><td colspan="6" class="text-center text-danger small py-3">Failed to update list from database source.</td></tr>`;
        }
    }

    // Submit handler logic
    addUserForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const payload = {
            username: document.getElementById('username').value,
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            passwd: document.getElementById('passwd').value,
            urole: document.getElementById('urole').value
        };

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showAlert('Saved!', 'success');
                addUserForm.reset();
                loadUsers(); 
            } else {
                showAlert(`Error: ${result.error || 'Failed'}`, 'danger');
            }
        } catch (err) {
            console.error(err);
            showAlert('Network API server error.', 'danger');
        }
    });

    refreshBtn.addEventListener('click', loadUsers);

    function showAlert(message, type) {
        alertPlaceholder.innerHTML = `<div class="alert alert-${type} py-1 px-2 small mb-0" role="alert">${message}</div>`;
        setTimeout(() => alertPlaceholder.innerHTML = '', 3000);
    }

    function escapeText(val) {
        if (val === undefined || val === null) return '';
        return String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Append this lookup engine script logic to the bottom of public/users.js

const searchBtn = document.getElementById('searchBtn');
const searchIdInput = document.getElementById('searchIdInput');
const searchResultPlaceholder = document.getElementById('searchResultPlaceholder');

searchBtn.addEventListener('click', async () => {
    const id = searchIdInput.value.trim();
    
    // Clear previous search text output
    searchResultPlaceholder.innerHTML = '';

    if (!id) {
        searchResultPlaceholder.innerHTML = `<span class="text-danger" style="color: #dc3545;">Please input a valid numeric ID.</span>`;
        return;
    }

    try {
        // Query the target GET endpoint by attaching the ID directly to the request URL path
        const response = await fetch(`/api/users/${id}`);
        const result = await response.json();

        if (response.status === 404) {
            searchResultPlaceholder.innerHTML = `<span style="color: #dc3545;">User ID ${id} not found in database rows.</span>`;
            return;
        }

        if (!response.ok || !result.success) {
            throw new Error(result.error || 'Server error targeting lookup profile data.');
        }

        // Output matching user record if found successfully
        const user = result.data;
        searchResultPlaceholder.innerHTML = `
            <div style="border-left: 3px solid #0d6efd; padding-left: 10px; background-color: #f8f9fa; padding-top: 8px; padding-bottom: 8px; border-radius: 0 4px 4px 0;">
                <strong>Match Found:</strong> ${escapeText(user.firstname)} ${escapeText(user.lastname)}<br>
                <small style="color: #6c757d;">
                    Username: <code>${escapeText(user.username)}</code><br>
                    Email: ${escapeText(user.email)}
                </small>
            </div>
        `;

    } catch (err) {
        console.error(err);
        searchResultPlaceholder.innerHTML = `<span style="color: #dc3545;">Error attempting to connect to API lookup server.</span>`;
    }
});


    loadUsers();
});
