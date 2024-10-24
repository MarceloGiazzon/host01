document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('myTable');
    const headers = table.querySelectorAll('thead th');
    
    headers.forEach((header, index) => {
        header.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            showContextMenu(event, index);
        });
    });

    function showContextMenu(event, columnIndex) {
        const menu = document.createElement('div');
        menu.classList.add('context-menu');
        menu.style.top = `${event.clientY}px`;
        menu.style.left = `${event.clientX}px`;
        menu.innerHTML = `
            <div class="menu-item">Transform to Pivot Column</div>
        `;
        
        menu.querySelector('.menu-item').addEventListener('click', function() {
            pivotColumn(columnIndex);
            document.body.removeChild(menu);
        });

        document.body.appendChild(menu);

        document.addEventListener('click', function() {
            if (menu) {
                document.body.removeChild(menu);
            }
        }, { once: true });
    }

    function pivotColumn(columnIndex) {
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const pivotData = {};

        // Group by selected column
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const key = cells[columnIndex].innerText;

            if (!pivotData[key]) {
                pivotData[key] = [];
            }
            pivotData[key].push(Array.from(cells).map(cell => cell.innerText));
        });

        // Reconstruct the table with the selected column as the first column
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';

        Object.keys(pivotData).forEach(key => {
            const group = pivotData[key];
            
            group.forEach((row, rowIndex) => {
                const newRow = document.createElement('tr');

                // Move the pivot column to the first position
                newRow.appendChild(createCell(key));

                row.forEach((cellContent, i) => {
                    if (i !== columnIndex) {
                        newRow.appendChild(createCell(cellContent));
                    }
                });

                tbody.appendChild(newRow);
            });
        });

        // Move the header
        moveColumnToFirst(columnIndex);
    }

    function moveColumnToFirst(columnIndex) {
        const headerRow = table.querySelector('thead tr');
        const headers = Array.from(headerRow.querySelectorAll('th'));
        const targetHeader = headers[columnIndex];

        // Move header to the first position
        headerRow.removeChild(targetHeader);
        headerRow.insertAdjacentElement('afterbegin', targetHeader);
    }

    function createCell(content) {
        const cell = document.createElement('td');
        cell.innerText = content;
        return cell;
    }
});
