document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');

    let draggingEle;
    let draggingColumnIndex;
    let placeholder;
    let list;
    let isDraggingStarted = false;

    // The current position of mouse relative to the dragging element
    let x = 0;
    let y = 0;

    // Swap two nodes
    const swap = function (nodeA, nodeB) {
        const parentA = nodeA.parentNode;
        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

        // Move nodeA to before the nodeB
        nodeB.parentNode.insertBefore(nodeA, nodeB);

        // Move nodeB to before the sibling of nodeA
        parentA.insertBefore(nodeB, siblingA);
    };

    // Check if nodeA is on the left of nodeB
    const isOnLeft = function (nodeA, nodeB) {
        // Get the bounding rectangle of nodes
        const rectA = nodeA.getBoundingClientRect();
        const rectB = nodeB.getBoundingClientRect();

        return rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2;
    };

    const cloneTable = function () {
        const rect = table.getBoundingClientRect();

        list = document.createElement('div');
        list.classList.add('clone-list');
        list.style.position = 'absolute';
        list.style.left = rect.left + 'px';
        list.style.top = rect.top + 'px';
        table.parentNode.insertBefore(list, table);

        // Hide the original table
        table.style.visibility = 'hidden';

        // Get all cells
        const originalCells = [].slice.call(table.querySelectorAll('tbody td'));

        const originalHeaderCells = [].slice.call(table.querySelectorAll('th'));
        const numColumns = originalHeaderCells.length;

        // Loop through the header cells
        originalHeaderCells.forEach(function (headerCell, headerIndex) {
            const width = parseInt(window.getComputedStyle(headerCell).width);

            // Create a new table from given row
            const item = document.createElement('div');
            item.classList.add('draggable');

            const newTable = document.createElement('table');
            newTable.setAttribute('class', 'clone-table');
            newTable.style.width = width + 'px';

            // Header
            const th = headerCell.cloneNode(true);
            let newRow = document.createElement('tr');
            newRow.appendChild(th);
            newTable.appendChild(newRow);

            const cells = originalCells.filter(function (c, idx) {
                return (idx - headerIndex) % numColumns === 0;
            });
            cells.forEach(function (cell) {
                const newCell = cell.cloneNode(true);
                newCell.style.width = width + 'px';
                newRow = document.createElement('tr');
                newRow.appendChild(newCell);
                newTable.appendChild(newRow);
            });

            item.appendChild(newTable);
            list.appendChild(item);
        });
    };

    const mouseDownHandler = function (e) {
        draggingColumnIndex = [].slice.call(table.querySelectorAll('th')).indexOf(e.target);

        // Determine the mouse position
        x = e.clientX - e.target.offsetLeft;
        y = e.clientY - e.target.offsetTop;

        // Attach the listeners to document
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        if (!isDraggingStarted) {
            isDraggingStarted = true;

            cloneTable();

            draggingEle = [].slice.call(list.children)[draggingColumnIndex];
            draggingEle.classList.add('dragging');

            // Let the placeholder take the height of dragging element
            // So the next element won't move to the left or right
            // to fill the dragging element space
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
            draggingEle.parentNode.insertBefore(placeholder, draggingEle.nextSibling);
            placeholder.style.width = draggingEle.offsetWidth + 'px';
        }

        // Set position for dragging element
        draggingEle.style.position = 'absolute';
        draggingEle.style.top = (draggingEle.offsetTop + e.clientY - y) + 'px';
        draggingEle.style.left = (draggingEle.offsetLeft + e.clientX - x) + 'px';

        // Reassign the position of mouse
        x = e.clientX;
        y = e.clientY;

        // The current order
        // prevEle
        // draggingEle
        // placeholder
        // nextEle
        const prevEle = draggingEle.previousElementSibling;
        const nextEle = placeholder.nextElementSibling;

        // // The dragging element is above the previous element
        // // User moves the dragging element to the left
        if (prevEle && isOnLeft(draggingEle, prevEle)) {
            // The current order    -> The new order
            // prevEle              -> placeholder
            // draggingEle          -> draggingEle
            // placeholder          -> prevEle
            swap(placeholder, draggingEle);
            swap(placeholder, prevEle);
            return;
        }

        // The dragging element is below the next element
        // User moves the dragging element to the bottom
        if (nextEle && isOnLeft(nextEle, draggingEle)) {
            // The current order    -> The new order
            // draggingEle          -> nextEle
            // placeholder          -> placeholder
            // nextEle              -> draggingEle
            swap(nextEle, placeholder);
            swap(nextEle, draggingEle);
        }
    };

    const mouseUpHandler = function () {
        // // Remove the placeholder
        placeholder && placeholder.parentNode.removeChild(placeholder);

        draggingEle.classList.remove('dragging');
        draggingEle.style.removeProperty('top');
        draggingEle.style.removeProperty('left');
        draggingEle.style.removeProperty('position');

        // Get the end index
        const endColumnIndex = [].slice.call(list.children).indexOf(draggingEle);

        isDraggingStarted = false;

        // Remove the list element
        list.parentNode.removeChild(list);

        // Move the dragged column to endColumnIndex
        table.querySelectorAll('tr').forEach(function (row) {
            const cells = [].slice.call(row.querySelectorAll('th, td'));
            draggingColumnIndex > endColumnIndex
                ? cells[endColumnIndex].parentNode.insertBefore(
                        cells[draggingColumnIndex],
                        cells[endColumnIndex]
                    )
                : cells[endColumnIndex].parentNode.insertBefore(
                        cells[draggingColumnIndex],
                        cells[endColumnIndex].nextSibling
                    );
        });

        // Bring back the table
        table.style.removeProperty('visibility');

        // Remove the handlers of mousemove and mouseup
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    table.querySelectorAll('th').forEach(function (headerCell) {
        headerCell.classList.add('draggable');
        headerCell.addEventListener('mousedown', mouseDownHandler);
    });
});