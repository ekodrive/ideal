/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */

$(document).ready(function(){
    // Bootbox js {CONFIRMATION ALERT}

    $('.slider-delete').click(function(){
        bootbox.confirm({
            message: "Şəkli silmək istədiyinizdən əminsiniz?",
            buttons: {
                confirm: {
                    label: 'Sil',
                    className: 'btn-danger'
                },
                cancel: {
                    label: 'Ləğv et',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if(result){
                    alert("Slayder silindi");
                }
            }
        });
    });

    autosize($('textarea'));

    $(".add-masa").click(function(){
         $(".masa").append('                   <div class="text-center text-muted content-divider mb-3">\n' +
             '                                    <span class="p-2">Yeni Masa</span>\n' +
             '                                 </div>' +
             '                                 <div class="row">\n' +
     '                                            <div class="col-md-6">\n' +
     '                                                <div class="form-group">\n' +
     '                                                    <label>Şəkillər:</label>\n' +
     '                                                    <div class="input-group">\n' +
     '                                                        <input type="text" class="form-control" readonly>\n' +
     '                                                        <div class="input-group-btn">\n' +
     '                                                    <span class="fileUpload btn bg-slate-600">\n' +
     '                                                      <span class="upl">Faylları seçin</span>\n' +
     '                                                      <input type="file" class="upload" multiple/>\n' +
     '                                                    </span>\n' +
     '                                                        </div>\n' +
     '                                                    </div>\n' +
     '                                                </div>\n' +
     '                                                <div class="form-group">\n' +
     '                                                    <label>Ölçüsü:</label>\n' +
     '                                                    <input type="text" class="form-control">\n' +
     '                                                </div>\n' +
     '                                                <div class="form-group">\n' +
     '                                                    <label>Qiyməti:</label>\n' +
     '                                                    <input type="text" class="form-control">\n' +
     '                                                </div>\n' +
     '                                            </div>\n' +
     '                                            <div class="col-md-6">\n' +
     '                                                <div class="form-group">\n' +
     '                                                    <label>Modul haqqında məlumat:</label>\n' +
     '                                                    <textarea type="text" class="form-control resize" rows="5"></textarea>\n' +
     '                                                </div>\n' +
     '                                            </div>\n' +
     '                                        </div>');
    });

    $(".add-dolab").click(function(){
        $(".dolab").append('                   <div class="text-center text-muted content-divider mb-3">\n' +
            '                                    <span class="p-2">Yeni Dolab</span>\n' +
            '                                 </div>' +
            '                                 <div class="row">\n' +
            '                                            <div class="col-md-6">\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Şəkillər:</label>\n' +
            '                                                    <div class="input-group">\n' +
            '                                                        <input type="text" class="form-control" readonly>\n' +
            '                                                        <div class="input-group-btn">\n' +
            '                                                    <span class="fileUpload btn bg-slate-600">\n' +
            '                                                      <span class="upl">Faylları seçin</span>\n' +
            '                                                      <input type="file" class="upload" multiple/>\n' +
            '                                                    </span>\n' +
            '                                                        </div>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Ölçüsü:</label>\n' +
            '                                                    <input type="text" class="form-control">\n' +
            '                                                </div>\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Qiyməti:</label>\n' +
            '                                                    <input type="text" class="form-control">\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-6">\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Modul haqqında məlumat:</label>\n' +
            '                                                    <textarea type="text" class="form-control resize" rows="5"></textarea>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>');
    });


    $(".add-tumba").click(function(){
        $(".tumba").append('                   <div class="text-center text-muted content-divider mb-3">\n' +
            '                                    <span class="p-2">Yeni Tumba</span>\n' +
            '                                 </div>' +
            '                                 <div class="row">\n' +
            '                                            <div class="col-md-6">\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Şəkillər:</label>\n' +
            '                                                    <div class="input-group">\n' +
            '                                                        <input type="text" class="form-control" readonly>\n' +
            '                                                        <div class="input-group-btn">\n' +
            '                                                    <span class="fileUpload btn bg-slate-600">\n' +
            '                                                      <span class="upl">Faylları seçin</span>\n' +
            '                                                      <input type="file" class="upload" multiple/>\n' +
            '                                                    </span>\n' +
            '                                                        </div>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Ölçüsü:</label>\n' +
            '                                                    <input type="text" class="form-control">\n' +
            '                                                </div>\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Qiyməti:</label>\n' +
            '                                                    <input type="text" class="form-control">\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-6">\n' +
            '                                                <div class="form-group">\n' +
            '                                                    <label>Modul haqqında məlumat:</label>\n' +
            '                                                    <textarea type="text" class="form-control resize" rows="5"></textarea>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>');
    });

});

/// Upload Files
$(document).on('change','.upload', function(){
    var names = [];
    var length = $(this).get(0).files.length;
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
        names.push(" " + $(this).get(0).files[i].name);
    }
    // $("input[name=file]").val(names);
    if(length>2){
        var fileName = names.join(',');
        $(this).closest('.form-group').find('.form-control').attr("value", fileName);
    }
    else{
        $(this).closest('.form-group').find('.form-control').attr("value",names);
    }
});