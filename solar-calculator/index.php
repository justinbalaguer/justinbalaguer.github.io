<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Solar Calculator</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!--toastr-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
</head>

<body>
    <noscript>This App needs JavaScript to run.</noscript>
    <div class="container">
        <div>
            <h1 class='text-center mt-5'>Solar Calculator</h1>
        </div>
        <br>
        <!--1-->
        <div>
            <div>
                <label for="load-desc">Load Description</label>
                <input class='form-control' type="text" id="load-desc" name="load-desc" placeholder="e.g Light, Electricfan etc.">
                <label for="qty">Quantity</label>
                <input class='form-control' type="number" onclick="this.select();" id="qty" min="0" name="qty" value="0">
                <label for="watts">Watts</label>
                <input class='form-control' type="number" onclick="this.select();" id="watts" min="0" name="watts" value="0">
                <label for="hour-use">Hour Use</label>
                <input class='form-control' type="number" onclick="this.select();" id="hour-use" min="0" name="hour-use" value="0">
                <br>
                <button onclick="addLoad();" id='add-btn' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
            </div>
            <br>
            <table class='table table-striped table-bordered text-center' id='solar-table'>
                <thead>
                    <tr>
                        <td class='table-dark' colspan="6">Connected Load</td>
                    </tr>
                    <tr>
                        <td>Load Description</td>
                        <td>Quantity</td>
                        <td>Watts</td>
                        <td>Hour Use</td>
                        <td>Watt-Hour</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody id='solar-table-body'></tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td id='watts1'>0</td>
                        <td></td>
                        <td id='watts2'>0</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!--2-->
        <br>
        <hr>
        <br>
        <div>
            <label for="avr-sun">Average Sunlight</label>
            <input class='form-control' type="number" min="0" onclick="this.select();" id="avr-sun" name="avr-sun" placeholder="e.g 0,1,2 etc.">
            <label for="corPer">Correction Factor for Losses (%)</label>
            <input class='form-control' type="number" min="0" onclick="this.select();" max="100" id="corPer" name="corPer" placeholder="e.g 30% etc.">
            <br>
            <button onclick="addLoad1();" id='add-btn1' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
        </div>
        <br>
        <table class='table table-striped table-bordered text-center' id='solar-table1'>
            <thead>
                <tr>
                    <td class='table-dark' colspan="4">Solar Panel Demand Load</td>
                </tr>
                <tr>
                    <td>Connected Load (Watt-Hr)</td>
                    <td>Average Sunlight</td>
                    <td>Correction Factor for Losses</td>
                    <td>Demand Load (Watt-Hr)</td>
                </tr>
            </thead>
            <tbody id='solar-table-body1'>
                <tr>
                    <td id='total-wt-hr'>0</td>
                    <td id='average-sunlight'></td>
                    <td id='correction-percentage'></td>
                    <td id='total-demand-load'></td>
                </tr>
            </tbody>
        </table>
        <!--3-->
        <br>
        <hr>
        <br>
        <div>
            <label for="panel-cap">Panel Capacity (Watts)</label>
            <input class='form-control' type="number" min="0" onclick="this.select();" id="panel-cap" name="panel-cap" value="0">
            <br>
            <button onclick="addLoad2();" id='add-btn2' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
        </div>
        <br>
        <table class='table table-striped table-bordered text-center' id='solar-table2'>
            <thead>
                <tr>
                    <td class='table-dark' colspan="4">Total Number of Solar Panel</td>
                </tr>
                <tr>
                    <td>Deman Load (Watt-Hr)</td>
                    <td>Panel Capacity (Watts)</td>
                    <td>Calculated No. of Panels</td>
                    <td>Actual No. of Panels</td>
                </tr>
            </thead>
            <tbody id='solar-table-body2'>
                <tr>
                    <td id='total-demand'>0</td>
                    <td id='panel-capacity'></td>
                    <td id='calc-panel'></td>
                    <td id='actual-panel'></td>
                </tr>
            </tbody>
        </table>
        <!--4-->
        <br>
        <hr>
        <br>
        <div>
            <label for="nvdc">Nominal Voltage (DC)</label>
            <input class='form-control' type="number" min="0" onclick="this.select();" id="nvdc" name="nvdc" value="0">
            <label for="allowableCap">Allowable Capacity (%)</label>
            <input class='form-control' type="number" min="0" max="100" onclick="this.select();" id="allowableCap" name="allowableCap" placeholder="e.g 30% etc.">
            <br>
            <button onclick="addLoad3();" id='add-btn2' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
        </div>
        <br>
        <table class='table table-striped table-bordered text-center' id='solar-table3'>
            <thead>
                <tr>
                    <td class='table-dark' colspan="5">Charge Controller Capacity</td>
                </tr>
                <tr>
                    <td>Total Panel Capacity (Watt)</td>
                    <td>Nominal Voltage (DC)</td>
                    <td>Allowable Capacity (%)</td>
                    <td>Calculated Capacity (Amp-Hr)</td>
                    <td>Actual Capacity</td>
                </tr>
            </thead>
            <tbody id='solar-table-body3'>
                <tr>
                    <td id='total-panel-cap'>0</td>
                    <td id='nominal-volt'></td>
                    <td id='allow-cap'></td>
                    <td id='calc-cap'></td>
                    <td id='actual-cap'></td>
                </tr>
            </tbody>
        </table>
        <!--5-->
        <br>
        <hr>
        <br>
        <div>
            <label for="allow-disc">Allowable Discharge (%)</label>
            <input class='form-control' type="number" min="0" max="100" onclick="this.select();" id="allow-disc" name="allow-disc" placeholder="e.g 30% etc.">
            <label for="backUpDays">No. Of Back Up Days</label>
            <input class='form-control' type="number" min="0" onclick="this.select();" id="backUpDays" name="backUpDays" value="1">
            <br>
            <button onclick="addLoad4();" id='add-btn2' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
        </div>
        <br>
        <table class='table table-striped table-bordered text-center' id='solar-table3'>
            <thead>
                <tr>
                    <td class='table-dark' colspan="5">Baterry Capacity</td>
                </tr>
                <tr>
                    <td>Connected Load (Watt-Hr)</td>
                    <td>Nominal Voltage (DC)</td>
                    <td>Allowable Discharge (%)</td>
                    <td>No. Of Back Up Days</td>
                    <td>Capacity (Amp-Hr)</td>
                </tr>
            </thead>
            <tbody id='solar-table-body3'>
                <tr>
                    <td id='connected-load'>0</td>
                    <td id='nominal-voltage'></td>
                    <td id='allowable-discharge'></td>
                    <td id='back-up-days'></td>
                    <td id='cap-total-amp'></td>
                </tr>
            </tbody>
        </table>
        <!--5-->
        <br>
        <hr>
        <br>
        <div>
            <label for="allow-load">Allowable Loading (%)</label>
            <input class='form-control' type="number" min="0" max="100" onclick="this.select();" id="allow-load" name="allow-load" placeholder="e.g 30% etc.">
            <br>
            <button onclick="addLoad5();" id='add-btn2' class='btn btn-success'><i class='fa fa-plus'></i>&nbsp;Add</button>
        </div>
        <br>
        <table class='table table-striped table-bordered text-center' id='solar-table4'>
            <thead>
                <tr>
                    <td class='table-dark' colspan="3">Inverter Capacity</td>
                </tr>
                <tr>
                    <td>Total Load Capacity (Watts)</td>
                    <td>Allowable Loading (%)</td>
                    <td>Capacity (Watts)</td>
                </tr>
            </thead>
            <tbody id='solar-table-body4'>
                <tr>
                    <td id='total-load-capacity'>0</td>
                    <td id='allowable-load'></td>
                    <td id='cap-watts'></td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
    </div>
</body>

<script type='text/javascript'>
    function addLoad() {
        var loadDesc = $('#load-desc').val();
        var qty = $('#qty').val();
        var watts = $('#watts').val();
        var hourUse = $('#hour-use').val();

        var wattHour = qty * watts * hourUse;

        var addedStr = "<tr><td>" + loadDesc + "</td><td>" + qty + "</td><td class='wt'>" + watts + "</td><td>" + hourUse + "</td><td class='wt1'>" + wattHour + "</td><td><button id='remove-data' style='background:none;border:none;' onclick='removeLoad();'><i class='fa fa-remove'></i></button></td></tr>";

        $('#solar-table-body').append(addedStr);

        //tfoot
        /* watts */
        var wattsTable = parseInt($('#watts1').html());
        wattsTable += parseInt(watts);
        $('#watts1').html(wattsTable);

        /* watt-hour */
        var wattsTable1 = parseInt($('#watts2').html());
        wattsTable1 += parseInt(wattHour);
        $('#watts2').html(wattsTable1);
        $('#total-wt-hr').html(wattsTable1);

        toastr.success('Load added');
    }

    function removeLoad() {

        $("#solar-table").on('click', '#remove-data', function() {

            var rowFind = $(this).closest("tr"); // Find the row
            var wattsData = rowFind.find(".wt").text(); // Find the text
            var wattHour = rowFind.find(".wt1").text(); // Find the text

            wattsData = parseInt(wattsData);
            wattHour = parseInt(wattHour);

            //tfoot
            /* watts */
            var wattsTable = parseInt($('#watts1').html());
            wattsTable -= wattsData;
            if (wattsTable < 0) {
                $('#watts1').html('0');
            } else {
                $('#watts1').html(wattsTable);
            }

            /* watt-hour */
            var wattsTable1 = parseInt($('#watts2').html());
            wattsTable1 -= wattHour;
            if (wattsTable < 0) {
                $('#watts2').html('0');
                $('#total-wt-hr').html('0');
            } else {
                $('#watts2').html(wattsTable1);
                $('#total-wt-hr').html(wattsTable1);
            }

            $(this).closest('tr').remove();

        });
        toastr.error('Load removed');
    }

    function addLoad1() {

        var tWtHr = $('#total-wt-hr').html();
        tWtHr = parseFloat(tWtHr);
        $('#connected-load').html(tWtHr);

        var avrSun = $('#avr-sun').val();
        $('#average-sunlight').html(avrSun);

        var corPer = $('#corPer').val();
        var corPer2 = corPer + " %";
        var corPer1 = corPer / 100;
        $('#correction-percentage').html(corPer2);

        var tDemandLoad = (tWtHr * (1 + corPer1)) / avrSun;
        $('#total-demand-load').html(tDemandLoad);
        $('#total-demand').html(tDemandLoad);

        toastr.success('Successfully added');
    }

    function addLoad2() {

        var panelCap = $('#panel-cap').val();
        $('#panel-capacity').html(panelCap);
        panelCap = parseInt(panelCap);

        var demandLoad2 = $('#total-demand').html();
        demandLoad2 = parseFloat(demandLoad2);

        var calcPanels = demandLoad2 / panelCap;
        $('#calc-panel').html(calcPanels);

        var actualPanel = Math.ceil(calcPanels);
        $('#actual-panel').html(actualPanel);

        var totalPanelCap = $('#panel-cap').val();
        totalPanelCap *= actualPanel;
        $('#total-panel-cap').html(totalPanelCap);

        toastr.success('Successfully added');
    }

    function addLoad3() {

        var totalPanelCap = $('#total-panel-cap').html();
        totalPanelCap = parseFloat(totalPanelCap);

        var nominalVolt = $('#nvdc').val();
        $('#nominal-volt').html(nominalVolt);
        $('#nominal-voltage').html(nominalVolt);

        var allowCap = $('#allowableCap').val();
        var allowCap2 = allowCap + " %";
        var allowCap1 = allowCap / 100;
        $('#allow-cap').html(allowCap2);

        var calcCap = totalPanelCap / (nominalVolt * allowCap1);
        $('#calc-cap').html(calcCap);

        var actualCap = Math.ceil((calcCap + 1) / 10) * 10;
        $('#actual-cap').html(actualCap);

        toastr.success('Successfully added');

    }

    function addLoad4() {

        var allowableDischarge = $('#allow-disc').val();
        var allowableDischarge2 = allowableDischarge + " %";
        var allowableDischarge1 = allowableDischarge / 100;
        $('#allowable-discharge').html(allowableDischarge2);

        var numBackUp = $('#backUpDays').val();
        $('#back-up-days').html(numBackUp);

        var connectedLoad = $('#connected-load').html();
        connectedLoad = parseFloat(connectedLoad);

        var nominalVoltage = $('#nominal-voltage').html();
        nominalVoltage = parseFloat(nominalVoltage);

        var totalAmpCap = (connectedLoad * numBackUp) / (nominalVoltage * allowableDischarge1);
        $('#cap-total-amp').html(totalAmpCap);

        toastr.success('Successfully added');

    }

    function addLoad5() {

        var allowLoad = $('#allow-load').val();
        var allowLoad2 = allowLoad + " %";
        var allowLoad1 = allowLoad / 100;
        $('#allowable-load').html(allowLoad);

        var getWatts1 = $('#watts1').html();
        getWatts1 = parseFloat(getWatts1);
        $('#total-load-capacity').html(getWatts1);

        var totalWattCap = getWatts1 / allowLoad1;
        $('#cap-watts').html(totalWattCap);

        toastr.success('Successfully added');

    }
</script>

</html>