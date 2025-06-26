document.addEventListener('DOMContentLoaded', function() {
            // Tab switching functionality
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs and content
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    this.classList.add('active');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                    
                    // Reset all inputs when switching tabs
                    resetInputs();
                });
            });
            
            // Modal elements
            const modal = document.getElementById('result-modal');
            const closeModal = document.getElementById('close-modal');
            const okModal = document.getElementById('modal-ok');
            
            // Close modal functions
            function closeModalFunc() {
                modal.style.display = 'none';
            }
            
            closeModal.addEventListener('click', closeModalFunc);
            okModal.addEventListener('click', closeModalFunc);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModalFunc();
                }
            });
            
            // Reset all inputs
            function resetInputs() {
                document.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });
            }
            
            // Show modal with result
            function showResult(title, formula, result) {
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-formula').textContent = formula;
                document.getElementById('modal-result').textContent = result;
                modal.style.display = 'flex';
            }
            
            // Area calculation
            const calculateAreaBtn = document.getElementById('calculate-area');
            calculateAreaBtn.addEventListener('click', function() {
                const base = parseFloat(document.getElementById('base').value);
                const height = parseFloat(document.getElementById('height').value);
                const baseError = document.getElementById('base-error');
                const heightError = document.getElementById('height-error');
                
                // Reset error messages
                baseError.style.display = 'none';
                heightError.style.display = 'none';
                
                // Validate inputs
                let isValid = true;
                
                if (isNaN(base) || base <= 0) {
                    baseError.style.display = 'block';
                    isValid = false;
                }
                
                if (isNaN(height) || height <= 0) {
                    heightError.style.display = 'block';
                    isValid = false;
                }
                
                if (!isValid) return;
                
                // Calculate area
                const area = 0.5 * base * height;
                
                // Show result in modal
                showResult(
                    'Hasil Luas Segitiga',
                    'Rumus: L = ½ × alas × tinggi = ½ × ' + base + ' × ' + height,
                    area.toFixed(2)
                );
                
                // Reset inputs
                resetInputs();
            });
            
            // Perimeter calculation
            const calculatePerimeterBtn = document.getElementById('calculate-perimeter');
            calculatePerimeterBtn.addEventListener('click', function() {
                const sideA = parseFloat(document.getElementById('sideA').value);
                const sideB = parseFloat(document.getElementById('sideB').value);
                const sideC = parseFloat(document.getElementById('sideC').value);
                const sideAError = document.getElementById('sideA-error');
                const sideBError = document.getElementById('sideB-error');
                const sideCError = document.getElementById('sideC-error');
                
                // Reset error messages
                sideAError.style.display = 'none';
                sideBError.style.display = 'none';
                sideCError.style.display = 'none';
                
                // Validate inputs
                let isValid = true;
                
                if (isNaN(sideA) || sideA <= 0) {
                    sideAError.style.display = 'block';
                    isValid = false;
                }
                
                if (isNaN(sideB) || sideB <= 0) {
                    sideBError.style.display = 'block';
                    isValid = false;
                }
                
                if (isNaN(sideC) || sideC <= 0) {
                    sideCError.style.display = 'block';
                    isValid = false;
                }
                
                if (!isValid) return;
                
                // Calculate perimeter
                const perimeter = sideA + sideB + sideC;
                
                // Show result in modal
                showResult(
                    'Hasil Keliling Segitiga',
                    'Rumus: K = sisi A + sisi B + sisi C = ' + sideA + ' + ' + sideB + ' + ' + sideC,
                    perimeter.toFixed(2)
                );
                
                // Reset inputs
                resetInputs();
            });
            
            // Auto reset when input changes
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    // You can add any additional reset logic here if needed
                });
            });
        });