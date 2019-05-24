var myapp = new Vue({
  el: '#app',
  data: {
    newDrink: '',
    newCalories: '',
    totalCalories: '',
    entries: []
  },
  methods: {
    addEntry: function () {
      var drink = this.newDrink.trim()
      var calories = parseInt(this.newCalories.trim()) || 0
      if (drink && calories) {
        // if (drink === 'This is an example'){
        //   this.entries.shift();
        // }
        this.entries.push({ drink: drink, calories: calories })
        this.newDrink = ''
        this.newCalories = ''
        calculateTotals(this)
      } else {
        alert("You need at least a drink and calories!")
      }
    },
    removeEntry: function (index) {
      this.entries.splice(index, 1)
      calculateTotals(this)
    },
    saveEntry: function() {
      calculateTotals(this)
    }
  }
})

function calculateTotals(app) {
  app.totalCalories = parseTotals(app.entries, 'calories')
}

calculateTotals(myapp)

function parseTotals(array, element) {
  var sum = 0
  array.forEach(function(entry) {
    sum = sum + parseInt(entry[element])
  }, sum, element)
  return sum
}

function getSearchResults(item) {
  var resultItem;
  $(".results").html("");

  $.ajax({
    type: 'GET',
    async: false,
    url: 'https://api.nutritionix.com/v1_1/search/'+item+'?fields=item_name' +
    '%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=91d21742&appKey=016757a1fa92455923691cf0fd341fc3',
    success: function(data) {
      resultItem = data.hits;
    }
  });

  resultItem.map(function(i) {
    var item = i.fields
    // console.log(item)
    $('.results').append(
      '<div class="itemBar">'+
        '<h2>' + item.item_name + '<h2>' +
        '<h3>Calories: ' + item.nf_calories + '<h3>' +
        '<h3>Serving Size: ' + item.nf_serving_size_qty + ' ' + item.nf_serving_size_unit +'<h3>' +
      '</div>'
     );
  });
}

function searchItem() {
  var formVal = document.getElementById('input').value;
  document.getElementById('searchForm').reset();
  getSearchResults(formVal);
}

$("#searchForm").submit(function(e) {
    e.preventDefault();
    searchItem();
});

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}