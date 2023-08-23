'use strict';

export const render = users => {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  users.forEach(user => {
    tbody.insertAdjacentHTML(
      'beforeend',
      `
    <tr data-key='${user.id}'>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.children ? 'Yes' : 'No'}</td>
        <td>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch"
                    name="form-permission" ${
                      user.permissions ? 'checked' : ''
                    }> 
            </div>
        </td>
        <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-warning btn-edit">
                    <i class="bi-pencil-square"></i>
                </button>
                <button type="button" class="btn btn-danger btn-remove">
                    <i class="bi-person-x"></i>
                </button>
            </div>
        </td>
    </tr>

    `
    );
  });
};
