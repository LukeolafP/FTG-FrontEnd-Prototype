/*===============================================================================================
======================== Register RSO Protoyping ================================================
===============================================================================================*/

let rsoRegTrue = document.getElementById("rsoRegTrue");
let rsoRegFalse = document.getElementById("rsoRegFalse");
let signInButtonLocked = document.getElementById("signInButtonLocked");
let signInButton = document.getElementById("signInButton");


function primeRsoReg() {
  if (!(rsoRegFalse.classList.contains('showRsoRegFalse'))) {
    rsoRegFalse.classList.toggle('showRsoRegFalse');
  }
  
  if (!(signInButtonLocked.classList.contains('showSignInButtonLocked'))) {
      signInButtonLocked.classList.toggle('showSignInButtonLocked');
  }
}


function toggleRsoRegTrue() {
  rsoRegTrue.classList.toggle("showRsoRegTrue");
  if (rsoRegFalse.classList.contains('showRsoRegFalse')) {
      rsoRegFalse.classList.remove('showRsoRegFalse');
  }
    signInButtonLocked.classList.remove('showSignInButtonLocked');
    signInButton.classList.toggle('showSignInButton');
}

function toggleRsoRegFalse() {
  rsoRegFalse.classList.add("showRsoRegFalse");
  if (rsoRegTrue.classList.contains('showRsoRegTrue')) {
      rsoRegTrue.classList.remove('showRsoRegTrue');
  }
    signInButton.classList.remove('showSignInButton');
    signInButtonLocked.classList.toggle('showSignInButtonLocked');
}

/*===============================================================================================
======================== Search Overlay Toggle ==================================================
===============================================================================================*/

var searchOverlay = document.getElementById("searchOverlayID");

function toggleSearchOverlay() {
  searchOverlay.classList.toggle("searchOverlayShow");
};


/*===============================================================================================
======================== Contact Us Submit Prototyping ==========================================
===============================================================================================*/

let contactUsForm =  document.getElementById("contactUsContainerForm");
let contactUsSuccess = document.getElementById("contactUsContainerSuccess");

function contactUsSubmitToggleSuccess() {
  contactUsForm.classList.add("closedContactUs");
  contactUsSuccess.classList.add("openContactUsSuccess");
}


/*===============================================================================================
======================== Team Section Mobile Toggle Overlay =====================================
===============================================================================================*/

var teamSection = document.getElementById("teamSectionID");
var teamSectionMobileExpandButton = document.getElementById("teamSectionMobileExpandButtonID");

function teamSectionMobileExpandToggleFunction() {
  teamSectionMobileExpandButton.classList.toggle("teamSectionMobileExpandButtonOpenRotate")
  teamSection.classList.toggle("teamSectionExpand")
}















let subMenu = document.getElementById("PFPsubMenu");

            function togglePFPsubMenu() {
                subMenu.classList.toggle("showFlex");
            }

            window.onclick = function(event) {
            if (!event.target.matches('.PFPImage')) {
                var dropdowns = document.getElementsByClassName("PFPDropDownWrapper");
                var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('showFlex')) {
                            openDropdown.classList.remove('showFlex');
                        }
                    }
                }
            }





















/*===============================================================================================
======================== Settings Tab Function ==================================================
===============================================================================================*/

function openSetting(evt, settingName) {
  var i, settingsMainContainer, settingsNavButton;
  settingsMainContainer = document.getElementsByClassName("settingsMainContainer");
  for (i = 0; i < settingsMainContainer.length; i++) {
    settingsMainContainer[i].style.display = "none";
  }
  settingsNavButton = document.getElementsByClassName("settingsNavButton");
  for (i = 0; i < settingsNavButton.length; i++) {
    settingsNavButton[i].className = settingsNavButton[i].className.replace(" active", "");
  }
  document.getElementById(settingName).style.display = "block";
  evt.currentTarget.className += " active";
}




























let containerSideColumnMapWR = document.getElementById("containerSideColumnMapWR");

    containerSideColumnMapWR.addEventListener("click", function(a){
        let toggleDiv = a.target.closest(".sideColumnMap");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
    });

let containerSideColumnAgent1WR = document.getElementById("containerSideColumnAgentWR");

    containerSideColumnAgent1WR.addEventListener("click", function(b){
        let toggleDiv = b.target.closest(".sideColumnAgentWRAgent1");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
    });

let containerSideColumnAgent2WR = document.getElementById("containerSideColumnAgentWR");

    containerSideColumnAgent2WR.addEventListener("click", function(b){
        let toggleDiv = b.target.closest(".sideColumnAgentWRAgent2");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
    });


let containerSideColumnAgentDuelWR1 = document.getElementById("containerSideColumnAgentDuelWR");

    containerSideColumnAgentDuelWR1.addEventListener("click", function(c){
        let toggleDiv = c.target.closest(".sideColumnAgentDuelWRAgent1");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
    });

let containerSideColumnAgentDuelWR2 = document.getElementById("containerSideColumnAgentDuelWR");

    containerSideColumnAgentDuelWR2.addEventListener("click", function(c){
        let toggleDiv = c.target.closest(".sideColumnAgentDuelWRAgent2");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
    });

/*===============================================================================================
======================== HotbarDrop Down ========================================================
===============================================================================================*/

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});



/*===============================================================================================
======================== Team Stat Section ======================================================
===============================================================================================*/

let teamStatSectionLocationDropDown1 = document.getElementById("teamStatSectionContainer");

teamStatSectionLocationDropDown1.addEventListener("click", function(c){
        let toggleDiv = c.target.closest(".teamStatSectionStatSectionDropDownContainer1");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
});

let teamStatSectionLocationDropDown2 = document.getElementById("teamStatSectionContainer");

teamStatSectionLocationDropDown2.addEventListener("click", function(c){
        let toggleDiv = c.target.closest(".teamStatSectionStatSectionDropDownContainer2");
        let toggleArrow = toggleDiv.getElementsByClassName("sideColumnDropDownArrow");
        let toggleArrowParsed = toggleArrow[0];
            if (toggleDiv && this.contains(toggleDiv)) {
                toggleDiv.classList.toggle("closed");
                toggleArrowParsed.classList.toggle("arrowDown")
            }
        console.log(toggleArrow)
        console.log(toggleArrowParsed)
});


const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
})


/*===============================================================================================
======================== High Chart Headshot Graph ==============================================
===============================================================================================*/

document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('sideColumnHeadshotBarGraphID', {
      chart: {
          type: 'column',
          backgroundColor: '#2A2A2A',
          // style: {
          //   paddingTop: 5,
          // }
      },

      title: {
        text: " ",
        margin: 0,
        padding: 0,
      },

      subtitle: {
        text: "-",
          style: {
            fontSize: 2,
          },
        
      },

      xAxis: {
          categories: ['Game 1', 'Game 2', 'Game 3','Game 4', 'Game 5', 'Game 6','Game 7', 'Game 8', 'Game 9','Game 10',
                      'Game 11', 'Game 12', 'Game 13','Game 14', 'Game 15', 'Game 16','Game 17', 'Game 18', 'Game 19','Game 20'
                    ],
          labels: {
            enabled: false
          }
          
      },
      yAxis: {
        tickInterval: 25,
        floor: 0,
        ceiling: 100,
        // tickAmount: 4,
        
        title: {
          text: null
        },
        labels: {
          formatter: function() {
          return this.value + ' %';
          },
          style: {
          fontSize: 10,
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontWeight: 'regular'
          },
        },
      },

      credits: {
        enabled: false
      },
      
      plotOptions: {
        series: {
            pointWidth: 9,
            borderRadius: 3,
            borderWidth: 0,
        },
        style: {
          margin: 5,
        }
      },

      series: [{
          name: 'Headshot %',
          showInLegend: false,
          data: [10, 20, 30, 40, 50, 60, 55, 45, 36, 33, 29, 34, 13, 35, 15, 12, 19, 11, 13, 22],
          zones: [{
            value: 15,
            color: '#ffffff'
          },{
            value: 30,
            color: '#A2F8B5',
          },{
            value: 45,
            color: '#42DC64',
          }, {
            value: 90,
            color: '#00B828',
          },{
            value: 101,
            color: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                  [0, '#C9A44B'], // start
                  [0.5, '#F7E991'], // middle
                  [1, '#C9A44B'] // end
              ]
            }
          }]
      }]
  });
});


/*===============================================================================================
======================== Team Side Column Stat Graphs ===========================================
===============================================================================================*/

document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('teamStatSectionRedBarGraphID', {
      chart: {
          type: 'column',
          backgroundColor: '#2A2A2A',
      },

      title: {
        text: " ",
        margin: 0,
        padding: 0,
      },

      subtitle: {
        text: "-",
          style: {
            fontSize: 2,
          },
        
      },

      xAxis: {
          categories: ['Game 1', 'Game 2', 'Game 3','Game 4', 'Game 5', 'Game 6','Game 7', 'Game 8', 'Game 9','Game 10',
                      'Game 11', 'Game 12', 'Game 13','Game 14', 'Game 15', 'Game 16','Game 17', 'Game 18', 'Game 19','Game 20'
                    ],
          labels: {
            enabled: false
          }
          
      },
      yAxis: {
        floor: 0,
        tickAmount: 4,
        
        title: {
          text: null
        },
        labels: {
          formatter: function() {
          return this.value + ' %';
          },
          style: {
          fontSize: 10,
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontWeight: 'regular'
          },
        },
      },

      credits: {
        enabled: false
      },
      
      plotOptions: {
        series: {
            pointWidth: 9,
            borderRadius: 3,
            borderWidth: 0,
        },
        style: {
          margin: 5,
        }
      },

      series: [{
          name: 'Headshot %',
          showInLegend: false,
          data: [10, 20, 21, 14, 29, 24, 8, 18, 12, 3, 5, 24, 13, 28, 15, 12, 19, 11, 13, 22],
          zones: [{
            value: 5,
            color: '#FFD8D8'
          },{
            value: 10,
            color: '#FFB5B5',
          },{
            value: 20,
            color: '#FF8787',
          }, {
            value: 30,
            color: '#FF6262',
          }]
      }]
  });
});

let greenTeamBarGraphIDs = [
  "teamStatSectionGreenBarGraphID",
  "teamStatSectionGreenBarGraphID2",
  "teamStatSectionGreenBarGraphID3",
  "teamStatSectionGreenBarGraphID4",
  "teamStatSectionGreenBarGraphID5",
];

for (let i = 0; i < greenTeamBarGraphIDs.length; i++) {
  document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart(greenTeamBarGraphIDs[i], {
        chart: {
            type: 'column',
            backgroundColor: '#2A2A2A',
        },
  
        title: {
          text: " ",
          margin: 0,
          padding: 0,
        },
  
        subtitle: {
          text: "-",
            style: {
              fontSize: 2,
            },
          
        },
  
        xAxis: {
            categories: ['Game 1', 'Game 2', 'Game 3','Game 4', 'Game 5', 'Game 6','Game 7', 'Game 8', 'Game 9','Game 10',
                        'Game 11', 'Game 12', 'Game 13','Game 14', 'Game 15', 'Game 16','Game 17', 'Game 18', 'Game 19','Game 20'
                      ],
            labels: {
              enabled: false
            }
            
        },
        yAxis: {
          floor: 0,
          tickAmount: 4,
          
          title: {
            text: null
          },
          labels: {
            formatter: function() {
            return this.value + ' %';
            },
            style: {
            fontSize: 10,
            color: '#FFF',
            fontFamily: 'Helvetica Neue',
            fontWeight: 'regular'
            },
          },
        },
  
        credits: {
          enabled: false
        },
        
        plotOptions: {
          series: {
              pointWidth: 9,
              borderRadius: 3,
              borderWidth: 0,
          },
          style: {
            margin: 5,
          }
        },
  
        series: [{
            name: 'Headshot %',
            showInLegend: false,
            data: [10, 20, 21, 14, 29, 24, 8, 18, 12, 3, 5, 24, 13, 28, 15, 12, 19, 11, 13, 22],
            zones: [{
              value: 5,
              color: '#D6FBDF'
            },{
              value: 10,
              color: '#A2F8B5',
            },{
              value: 20,
              color: '#42DC64',
            }, {
              value: 30,
              color: '#00B828',
            }]
        }]
    });
  });
}


/*===============================================================================================
======================== Heat Maps ==============================================================
===============================================================================================*/

  

//====================== Multi Deaths =================================
  var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsAscent")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBind")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBreeze")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsAscent2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBind2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBreeze2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsAscent3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBind3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiDeathsBreeze3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});
















//====================== Multi Kills =================================
var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsAscent")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBind")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBreeze")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsAscent2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBind2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBreeze2")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsAscent3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 100, y: 110, value: 3, radius: 10}, 
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 90, y: 113, value: 1, radius: 10},
        { x: 110, y: 108, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 102, y: 115, value: 1, radius: 10},
        { x: 106, y: 120, value: 1, radius: 10},
        { x: 105, y: 105, value: 1, radius: 10},
        { x: 90, y: 92, value: 1, radius: 10},
        { x: 88, y: 98, value: 1, radius: 10},
        { x: 100, y: 98, value: 1, radius: 10},
        { x: 84, y: 98, value: 1, radius: 10},
        { x: 100, y: 93, value: 1, radius: 10},
        { x: 102, y: 92, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 110, y: 98, value: 1, radius: 10},
        { x: 98, y: 98, value: 1, radius: 10},
        { x: 104, y: 93, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},


        { x: 240, y: 120, value: 2, radius: 10}, 
        { x: 245, y: 120, value: 2, radius: 10},
        { x: 240, y: 125, value: 2, radius: 10}, 
        { x: 245, y: 130, value: 2, radius: 10},
        { x: 240, y: 136, value: 2, radius: 10}, 
        { x: 245, y: 132, value: 2, radius: 10},
        { x: 240, y: 105, value: 2, radius: 10}, 
        { x: 245, y: 110, value: 2, radius: 10},
        { x: 235, y: 105, value: 2, radius: 10}, 
        { x: 230, y: 110, value: 2, radius: 10},
        { x: 255, y: 105, value: 2, radius: 10}, 
        { x: 250, y: 110, value: 2, radius: 10},
    ]
  });

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBind3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 90, y: 95, value: 3, radius: 10}, 
        { x: 95, y: 95, value: 1, radius: 10},
        { x: 90, y: 83, value: 1, radius: 10},
        { x: 90, y: 98, value: 1, radius: 10},
        { x: 85, y: 120, value: 1, radius: 10},
        { x: 92, y: 115, value: 1, radius: 10},
        { x: 96, y: 120, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 112, value: 1, radius: 10},
        { x: 95, y: 115, value: 1, radius: 10},
        { x: 95, y: 118, value: 1, radius: 10},
        { x: 70, y: 112, value: 1, radius: 10},
        { x: 68, y: 118, value: 1, radius: 10},
        { x: 70, y: 118, value: 1, radius: 10},
        { x: 64, y: 118, value: 1, radius: 10},
        { x: 70, y: 113, value: 1, radius: 10},
        { x: 95, y: 102, value: 1, radius: 10},
        { x: 95, y: 105, value: 1, radius: 10},
        { x: 95, y: 108, value: 1, radius: 10},
        { x: 70, y: 102, value: 1, radius: 10},
        { x: 68, y: 108, value: 1, radius: 10},
        { x: 70, y: 108, value: 3, radius: 10},
        { x: 64, y: 108, value: 1, radius: 10},
        { x: 70, y: 103, value: 1, radius: 10},
        { x: 72, y: 92, value: 3, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 70, y: 98, value: 2, radius: 10},
        { x: 78, y: 98, value: 1, radius: 10},
        { x: 64, y: 93, value: 1, radius: 10},


        { x: 220, y: 115, value: 2, radius: 10}, 
        { x: 225, y: 115, value: 1, radius: 10},
        { x: 220, y: 115, value: 1, radius: 10}, 
        { x: 225, y: 115, value: 2, radius: 10},
        { x: 210, y: 116, value: 2, radius: 10}, 
        { x: 215, y: 112, value: 1, radius: 10},
        { x: 210, y: 105, value: 1, radius: 10}, 
        { x: 215, y: 110, value: 1, radius: 10},
        { x: 215, y: 105, value: 2, radius: 10}, 
        { x: 210, y: 110, value: 2, radius: 10},
        { x: 215, y: 105, value: 1, radius: 10}, 
        { x: 210, y: 110, value: 1, radius: 10},
    ]
});

var heatmap = h337.create({
    container: document.getElementById("teamStatSectionMapHeatmapCanvasTeamMultiKillsBreeze3")
  });

  var points = [];

  var point = {
    radius: 500
  };
  points.push(point);
  
  heatmap.setData({
    max: 3,
    data: [
        { x: 40, y: 120, value: 3, radius: 10}, 
        { x: 35, y: 115, value: 1, radius: 10},
        { x: 30, y: 123, value: 1, radius: 10},
        { x: 50, y: 118, value: 1, radius: 10},
        { x: 25, y: 130, value: 1, radius: 10},
        { x: 42, y: 125, value: 1, radius: 10},
        { x: 46, y: 130, value: 1, radius: 10},
        { x: 45, y: 115, value: 1, radius: 10},
        { x: 30, y: 102, value: 1, radius: 10},
        { x: 28, y: 108, value: 1, radius: 10},
        { x: 40, y: 108, value: 1, radius: 10},
        { x: 24, y: 108, value: 1, radius: 10},
        { x: 40, y: 103, value: 1, radius: 10},
        { x: 32, y: 102, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 50, y: 108, value: 1, radius: 10},
        { x: 38, y: 108, value: 1, radius: 10},
        { x: 44, y: 103, value: 1, radius: 10},
        { x: 35, y: 122, value: 1, radius: 10},
        { x: 35, y: 125, value: 1, radius: 10},
        { x: 35, y: 128, value: 1, radius: 10},


        { x: 240, y: 170, value: 2, radius: 10}, 
        { x: 245, y: 170, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 160, value: 2, radius: 10},
        { x: 240, y: 166, value: 2, radius: 10}, 
        { x: 245, y: 162, value: 2, radius: 10},
        { x: 240, y: 175, value: 2, radius: 10}, 
        { x: 245, y: 150, value: 2, radius: 10},
        { x: 235, y: 155, value: 2, radius: 10}, 
        { x: 230, y: 150, value: 2, radius: 10},
        { x: 255, y: 155, value: 2, radius: 10}, 
        { x: 250, y: 150, value: 2, radius: 10},
    ]
});



/*===============================================================================================
======================== Master Stat Block WL Rank Shit =========================================
===============================================================================================*/

Highcharts.chart('wlHistoryGraphID', {
  chart: {
    backgroundColor: null,
    padding: 0,
    margin: 0,
  },

  title: false,
  subtitle: false,
  credits: {
    enabled: false
  },

  xAxis: {
    labels: {
      enabled: false
    },
    tickColor: '#5F5F5F',
    gridLineColor: '#5F5F5F',
    lineColor: '#5F5F5F',
    
  },

  yAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    },
    tickAmount: 0,
    tickColor: '#5F5F5F',
    gridLineColor: '#5F5F5F',
  },

  plotOptions: {
    series: {
      marker: {
        radius: 5,
        fillColor: '#00FF00',
      },
    },
  },

  series: [{
    name: 'Tokyo',
    showInLegend: false,
    lineWidth: 4,
    lineColor: '#00FF00',
    data: [3, 5, 4, 6, 3, 1, 5, {
        y: 10,
        marker: {
            symbol: 'url(images/Diamond3Tiny.png)',
        },
    }, 6, {
      y: 4,
      marker: {
        symbol: 'url(images/Diamond3Tiny.png)'
      },
    }, {
      y: 5,
      marker: {
        symbol: 'url(images/Diamond3Tiny.png)'
      }}, 7, 6, {
        y: 4,
        marker: {
          symbol: 'url(images/Diamond3Tiny.png)'
        },
      }, 3, {
        y: 5,
        marker: {
          symbol: 'url(images/Diamond3Tiny.png)'
        },
      }, 4, 6, 7, 9,]
  }]
})


// /*===============================================================================================
// ======================== Register RSO Protoyping ================================================
// ===============================================================================================*/

// let rsoRegTrue = document.getElementById("rsoRegTrue");
// let rsoRegFalse = document.getElementById("rsoRegFalse");
// let signInButtonLocked = document.getElementById("signInButtonLocked");
// let signInButton = document.getElementById("signInButton");


// function primeRsoReg() {
//   if (!(rsoRegFalse.classList.contains('showRsoRegFalse'))) {
//     rsoRegFalse.classList.toggle('showRsoRegFalse');
//   }
  
//   if (!(signInButtonLocked.classList.contains('showSignInButtonLocked'))) {
//       signInButtonLocked.classList.toggle('showSignInButtonLocked');
//   }
// }


// function toggleRsoRegTrue() {
//   rsoRegTrue.classList.toggle("showRsoRegTrue");
//   if (rsoRegFalse.classList.contains('showRsoRegFalse')) {
//       rsoRegFalse.classList.remove('showRsoRegFalse');
//   }
//     signInButtonLocked.classList.remove('showSignInButtonLocked')
//     signInButton.classList.toggle('showSignInButton')
// }

// function toggleRsoRegFalse() {
//   rsoRegFalse.classList.add("showRsoRegFalse");
//   if (rsoRegTrue.classList.contains('showRsoRegTrue')) {
//       rsoRegTrue.classList.remove('showRsoRegTrue');
//   }
//     signInButton.classList.remove('showSignInButton')
//     signInButtonLocked.classList.toggle('showSignInButtonLocked')
// }