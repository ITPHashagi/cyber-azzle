function togglePricing(tab) {
    const monthlyContent = document.getElementById('monthly');
    const annuallyContent = document.getElementById('annually');
    const monthlyButton = document.getElementById('btnMonthly');
    const annuallyButton = document.getElementById('btnAnnually');
  
    if (tab === 'monthly') {
      // Hiển thị phần tử "monthly" và ẩn phần tử "annually"
      monthlyContent.classList.remove('hidden');
      annuallyContent.classList.add('hidden');
      // Đổi lớp CSS cho nút
      monthlyButton.classList.add('active');
      annuallyButton.classList.remove('active');
    } else if (tab === 'annually') {
      // Hiển thị phần tử "annually" và ẩn phần tử "monthly"
      annuallyContent.classList.remove('hidden');
      monthlyContent.classList.add('hidden');
      // Đổi lớp CSS cho nút
      annuallyButton.classList.add('active');
      monthlyButton.classList.remove('active');
    }
  }
  document.getElementById('btnMonthly').onclick = function() {
    togglePricing('monthly');
  };
  document.getElementById('btnAnnually').onclick = function() {
    togglePricing('annually');
  };