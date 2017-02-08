(function () {

  var socket = io.connect('http://localhost:3000');
  socket.on('success', function (data) {
    //console.log(data);
    var fullData = data.data;
    console.log(fullData);

    if (fullData.status != null || fullData.status != undefined) {

      var table = $('<table></table>').addClass('domain-table');
      var tbody = $('<tbody></tbody>');
      var tr = $('<tr></tr>');
      var td1 = $('<td></td>').text(fullData.domain);
      tr.append(td1);
      var td2 = $('<td></td>').text(fullData.email.toString());
      tr.append(td2);
      var td3 = $('<td></td>').text(fullData.status.success);
      tr.append(td3);
      var td4 = $('<td></td>').text(fullData.status.unverified.toString());
      tr.append(td4);
      var td5 = $('<td></td>').text(fullData.status.verified.toString());
      tr.append(td5);
      tbody.append(tr);
      table.append(tbody);
      $('body').append(table);
    }
  });

})();
