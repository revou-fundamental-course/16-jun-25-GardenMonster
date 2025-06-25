const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Hapus class active dari semua tab dan content
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Tambahkan class active ke tab yang diklik
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });

        // Fungsi hitung luas segitiga
        document.getElementById('hitung-luas').addEventListener('click', () => {
            const alas = parseFloat(document.getElementById('alas').value);
            const tinggi = parseFloat(document.getElementById('tinggi').value);
            
            if (isNaN(alas) || isNaN(tinggi)) {
                alert('Masukkan nilai yang valid untuk alas dan tinggi!');
                return;
            }
            
            const luas = 0.5 * alas * tinggi;
            
            // Tampilkan hasil
            document.getElementById('nilai-alas').textContent = alas;
            document.getElementById('nilai-tinggi').textContent = tinggi;
            document.getElementById('nilai-luas').textContent = luas.toFixed(2);
            document.getElementById('hasil-luas').classList.add('active');
        });

        // Fungsi hitung keliling segitiga
        document.getElementById('hitung-keliling').addEventListener('click', () => {
            const sisiA = parseFloat(document.getElementById('sisi-a').value);
            const sisiB = parseFloat(document.getElementById('sisi-b').value);
            const sisiC = parseFloat(document.getElementById('sisi-c').value);
            
            if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
                alert('Masukkan nilai yang valid untuk semua sisi!');
                return;
            }
            
            const keliling = sisiA + sisiB + sisiC;
            
            // Tampilkan hasil
            document.getElementById('nilai-sisi-a').textContent = sisiA;
            document.getElementById('nilai-sisi-b').textContent = sisiB;
            document.getElementById('nilai-sisi-c').textContent = sisiC;
            document.getElementById('nilai-keliling').textContent = keliling.toFixed(2);
            document.getElementById('hasil-keliling').classList.add('active');
        });

        // Reset hasil ketika mengubah input
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const tabId = document.querySelector('.tab.active').getAttribute('data-tab');
                document.getElementById(`hasil-${tabId}`).classList.remove('active');
            });
        });