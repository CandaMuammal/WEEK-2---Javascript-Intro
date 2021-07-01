const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
			let cek = dataDay.find((item) => {
				return item === day.toLowerCase()
			})
			if (cek) {
				resolve(day)
			} else {
				reject(new Error('Hari ini bukan hari kerja'))
			}
		}, 3000)
	})
}

// Penggunaan then(untuk handle resolve) & catch(untuk handle reject)
cekHariKerja('seninnn')
.then((res) => {
	console.log(res);
})
.catch((err) => {
	console.log(err.message);
})


// // Penggunaan try(untuk handle resolve) & catch(untuk handle reject)
// const cekHariKerja2 = async (day) => {
//   try {
//     const check = await cekHariKerja(day);
//     console.log(check)
//   }catch (err) {
//     console.log(err.message);
//   }
// };

// cekHariKerja2("Kamis");
