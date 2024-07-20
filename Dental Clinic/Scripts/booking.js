document.addEventListener("DOMContentLoaded", function () {
  var providers = [
    "No Preference",
    "Dr. Michael Mulick",
    "Dr. Nick Radandt",
    "Dr. Shana Reidy",
    "Dr. Brigitte Higgins",
    "Dr. Jake Ericksen",
  ];

  var providerDropdown = document.getElementById("provider");
  for (var i = 0; i < providers.length; i++) {
    var option = document.createElement("option");
    option.value = providers[i];
    option.text = providers[i];
    providerDropdown.add(option);
  }
});
