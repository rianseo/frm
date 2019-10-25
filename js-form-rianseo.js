<script>
//<![CDATA[
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		// Onclick Whatsapp Sent!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .paket').val() == '') { // Paket
				ph = $('#whatsapp .paket').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .paket').focus();
				return false;
			} else if ($('#whatsapp .nama').val() == '') { // Cek No Whatsapp
				ph = $('#whatsapp .nama').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nama').focus();
                return false;
            } else if ($('#whatsapp .email').val() == '') { // Cek email
				ph = $('#whatsapp .email').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .email').focus();
                return false;
            } else if ($('#whatsapp .kelamin').val() == '') { // Cek kelamin
                ph = $('#whatsapp .kelamin').attr('placeholder');
                alert('Silahkan pilih ' + ph);
                $('#whatsapp .kelamin').focus();
				return false;
            } else if ($('#whatsapp .lahir').val() == '') { // Cek lahir
                ph = $('#whatsapp .lahir').attr('placeholder');
                alert('Silahkan masukan ' + ph);
                $('#whatsapp .lahir').focus();
				return false;
			} else if ($('#whatsapp .nomorhp').val() == '') { // Cek hp
				ph = $('#whatsapp .nomorhp').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nomorhp').focus();
				return false;
			} else if ($('#whatsapp .ktp').val() == '') { // Cek ktp
				ph = $('#whatsapp .ktp').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .ktp').focus();
				return false;
			} else if ($('#whatsapp .alamat').val() == '') { // Cek alamat
				ph = $('#whatsapp .alamat').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .alamat').focus();
				return false;
			} else if ($('#whatsapp .provinsi').val() == '') { // Cek provinsi
				ph = $('#whatsapp .provinsi').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .provinsi').focus();
				return false;
			} else if ($('#whatsapp .kabupaten').val() == '') { // Cek kabupaten
				ph = $('#whatsapp .kabupaten').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .kabupaten').focus();
				return false;
			} else if ($('#whatsapp .kecamatan').val() == '') { // Cek kecamatan
				ph = $('#whatsapp .kecematan').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .kecamatan').focus();
				return false;
			} else if ($('#whatsapp .kelurahan').val() == '') { // Cek kelurahan
				ph = $('#whatsapp .kelurahan').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .kelurahan').focus();
				return false;
			} else if ($('#whatsapp .namaBank').val() == '') { // Cek bank
				ph = $('#whatsapp .namaBank').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .namaBank').focus();
				return false;
			} else if ($('#whatsapp .nomorBank').val() == '') { // Cek nomor bank
				ph = $('#whatsapp .nomorBank').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nomorBank').focus();
				return false;
			} else if ($('#whatsapp .namaRekening').val() == '') { // Cek rekening
				ph = $('#whatsapp .namaRekening').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .namaRekening').focus();
				return false;
			} else if ($('#whatsapp .cabang').val() == '') { // Cek cabang
				ph = $('#whatsapp .cabang').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .cabang').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Member
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    paket = $('#whatsapp .paket').val(),
					nama = $('#whatsapp .nama').val(),
					email = $('#whatsapp .email').val(),
					kelamin = $('#whatsapp .kelamin').val(),
					lahir = $('#whatsapp .lahir').val(),
					nomorhp = $('#whatsapp .nomorhp').val(),
					ktp = $('#whatsapp .ktp').val(),
                // Get Alamat
                    alamat = $('#whatsapp .alamat').val(),
					provinsi = $('#whatsapp .provinsi').val(),
					kabupaten = $('#whatsapp .kabupaten').val(),
					kecamatan = $('#whatsapp .kecamatan').val(),
					kelurahan = $('#whatsapp .kelurahan').val(),
               // Get Bank
                    namaBank = $('#whatsapp .namaBank').val(),
					nomorBank = $('#whatsapp .nomorBank').val(),
					namaRekening = $('#whatsapp .namaRekening').val(),
					cabang = $('#whatsapp .cabang').val();

				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + 
                 '&text=%2APaket%2A: ' + paket + '%0A%0A' +
                 '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                 '%0A%2ADetail Data*%2A%0A' +
                 '%0A%2ANama%2A: ' + nama +
                 '%0A%2AEmail%2A: ' + email +
                 '%0A%2AJenis Kelamin%2A: ' + kelamin +
                 '%0A%2ATanggal Lahir%2A: ' + lahir +
                 '%0A%2ANo HP / WhatsApp%2A: ' + nomorhp +
                 '%0A%2ANIK KTP%2A: ' + ktp + '%0A%0A' +
                 '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                 '%0A%2ADetail Alamat*%2A%0A' +
                 '%0A%2AJalan%2A: ' + alamat +
                 '%0A%2AProvinsi%2A: ' + provinsi +
                 '%0A%2AKabupaten%2A: ' + kabupaten +
                 '%0A%2AKecamatan%2A: ' + kecamatan +
                 '%0A%2AKelurahan%2A: ' + kelurahan + '%0A%0A' +
                 '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                 '%0A%2ADetail Bank*%2A%0A' +
                 '%0A%2ANama Bank%2A: ' + namaBank + 
                 '%0A%2ANomor Rekening%2A: ' + nomorBank + 
                 '%0A%2ANama Rekening%2A: ' + namaRekening +
                 '%0A%2ACabang%2A: ' + cabang + '%0A%0A' + 
                 '%0A%2ADari%2A ' + via_url);

				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
//]]>
</script>