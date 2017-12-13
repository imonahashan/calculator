$('#add').click(function () {
    var x =Number($('#firstNumber').val());
    var y = Number($('#secondNumber').val());
    var z = x+y;

    $('#result').val(z);
})

$('#sub').click(function () {
    var x = $('#firstNumber').val();
    var y = $('#secondNumber').val();
    var z = x-y;

    $('#result').val(z);
});

$('#mul').click(function () {
    var x = $('#firstNumber').val();
    var y = $('#secondNumber').val();
    var z = x*y;

    $('#result').val(z);
});
$('#div').click(function () {
    var x = $('#firstNumber').val();
    var y = $('#secondNumber').val();
    var z = x/y;

    $('#result').val(z);
});

$('#mod').click(function () {
    var x = $('#firstNumber').val();
    var y = $('#secondNumber').val();
    var z = x%y;

    $('#result').val(z);
});

$('#reset').clic(function () {
    var z='';
    $('#result').val(z);
})
