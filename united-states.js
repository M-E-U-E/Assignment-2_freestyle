document.addEventListener('DOMContentLoaded', function() {
  const backButton = document.getElementById('back-button');
  const saveButton = document.getElementById('display-settings-save-btn');
  const regionSelect = document.getElementById('display-settings-region');
  const currencySelect = document.getElementById('display-settings-currency');
  const toastNotification = document.getElementById('toast-notification');

  // Back button click handler
  backButton.addEventListener('click', function() {
    window.history.back();
  });

  // Save button click handler
  saveButton.addEventListener('click', function() {
    const selectedRegion = regionSelect.value;
    const selectedCurrency = currencySelect.value;

    console.log('Saved settings:', { region: selectedRegion, currency: selectedCurrency });
    showToast();

    setTimeout(() => {
      window.history.back();
    }, 1500);
  });

  // Function to show toast notification
  function showToast() {
    toastNotification.style.display = 'block';
    setTimeout(() => {
      toastNotification.style.display = 'none';
    }, 3000);
  }

  // Auto-select currency based on region
  regionSelect.addEventListener('change', function() {
    const region = this.value;
    let currency;

    switch(region) {
      case 'united-states':
        currency = 'usd';
        break;
      case 'canada':
        currency = 'cad';
        break;
      case 'united-kingdom':
        currency = 'gbp';
        break;
      case 'australia':
        currency = 'aud';
        break;
      case 'japan':
        currency = 'jpy';
        break;
      case 'germany':
      case 'france':
        currency = 'eur';
        break;
    }

    if (currency) {
      currencySelect.value = currency;
    }
  });
});
