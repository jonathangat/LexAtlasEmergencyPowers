window.addEventListener('DOMContentLoaded', function () {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('table-container').innerHTML = this.responseText

      // get all the cells in the first column
      let firstColumnCells = document.querySelectorAll('tr td:first-child')

      // loop through each cell and check if the content start with a number
      firstColumnCells.forEach((cccell) => {
        const cccellContent = cccell.textContent.trim()
        if (/^[0-9]/.test(cccellContent[0])) {
          cccell.classList.add('catrow')
        }
      })

      // Get the HTML table element
      var table = document.getElementById('countries')

      // Get all the rows of the table
      var rows = table.getElementsByTagName('tr')

      // Iterate over the rows
      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td') // Get the first cell in the current row

        // check if the row contains cells
        if (cells.length > 0) {
          var firstCell = cells[0]

          // Check if the text in the first cell is lowercase
          if (firstCell.textContent.toLowerCase() === firstCell.textContent) {
            rows[i].classList.add('varrow') // Add your desired class to the row
          }
        }
      }
    }

    $('td').on('click', function () {
      let modaltext = $(this).html()
      if (modaltext) {
        $('#modalcontent').html(modaltext)
        $('#ex1').modal('show')
      }
    })
  }

  xhttp.open(
    'GET',
    '../Emergency_powers_dataset_full/data/Emergency_Powers_dataset.html',
    true
  )
  xhttp.send()
})
