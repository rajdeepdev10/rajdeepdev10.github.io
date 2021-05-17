const table = document.getElementById("course-table");
const filter = document.getElementById("filter");

// appends a new row at the top most position of #course-table
function append_row (title, title_link, description, language, source_code_link, course) {
    const row = table.insertRow(-1);
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);

    // insert title
    if (title_link !== "") {
        cell0.innerHTML = `<a href='${title_link}'>${title}</a>`;
    } else {
        cell0.innerHTML = title;
    }

    // insert source_code_link
    if (source_code_link !== "") {
        cell3.innerHTML = `<a href='${source_code_link}'>Click Here</a>`;
    } else {
        cell3.innerHTML = "N/A";
    }

    // insert description, languages and course
    cell1.innerHTML = description;
    cell2.innerHTML = language;
    cell4.innerHTML = course;

}


append_row("Timestamp Microservice^", "http://timestamp-microservice-by-raj.herokuapp.com/", "Generates a timestamp API based on a chosen date by user", ["Node.js", "Express"], "https://github.com/rajdeepdev10/fcc-timestamp-microservice", "freeCodeCamp API Micsvc");
append_row("Mail*", "https://cs50-mail-by-raj.herokuapp.com/", "An email client that makes API calls to send and receive emails", ["JavaScript"], "", "CS50's Web Programming");
append_row("Tic-tac-toe", "https://rajdeepdev10.github.io/tic-tac-toe", "A Tic-tac-toe game to play in the web browser", ["HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/tic-tac-toe", "The Odin Proj JavaScript");
append_row("Methanol Process Simulation", "https://rajdeepdev10.github.io/methanol-process-simulation/", "A webpage for CHBE 370 term project", ["Markdown", "Jekyll"], "https://github.com/rajdeepdev10/methanol-process-simulation", "-");
append_row("Treemap Diagram", "https://rajdeepdev10.github.io/treemap-diagram", "Visualizing top 95 selling movies worldwide by category", ["D3.js", "HTML", "CSS"], "https://github.com/rajdeepdev10/treemap-diagram", "freeCodeCamp Data Vis");
append_row("Choropleth Map", "https://rajdeepdev10.github.io/choropleth-map", "A choropleth map of education attainment in the US", ["D3.js", "HTML", "CSS"], "https://github.com/rajdeepdev10/choropleth-map", "freeCodeCamp Data Vis");
append_row("Heat Map", "https://rajdeepdev10.github.io/heat-map", "Visualizing the change in average global surface temperature", ["D3.js", "HTML", "CSS"], "https://github.com/rajdeepdev10/heat-map", "freeCodeCamp Data Vis");
append_row("Scatterplot Graph", "https://rajdeepdev10.github.io/scatterplot-graph/", "Visualization Doping in Professional Bicycle Racing", ["D3.js", "HTML", "CSS"], "https://github.com/rajdeepdev10/scatterplot-graph", "freeCodeCamp Data Vis");
append_row("Bar Chart", "https://rajdeepdev10.github.io/bar-chart", "Data Visualization of United States GDP", ["D3.js", "HTML", "CSS"], "https://github.com/rajdeepdev10/bar-chart", "freeCodeCamp Data Vis");
append_row("Commerce*", "https://cs50-commerce-by-raj.herokuapp.com/", "An eBay-like e-commerce auction site", ["Django", "SQL"], "", "CS50's Web Programming");
append_row("Wiki*", "https://cs50-wiki-by-raj.herokuapp.com/", "A Wikipedia-like online encyclopedia", ["Django"], "", "CS50's Web Programming");
append_row("Search", "https://rajdeepdev10.github.io/search/", "A front end for Google, Google Image, and Google Advanced Search", ["HTML", "CSS"], "https://github.com/rajdeepdev10/search", "CS50's Web Programming");
append_row("UBC50", "", "A Chrome Extension with a clock, weather, and a todo app", ["jQuery", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/UBC50", "CS50x");
append_row("Pomodoro Clock", "https://rajdeepdev10.github.io/pomodoro_clock/", "A Pomodoro timer app", ["React", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/pomodoro_clock", "freeCodeCamp Front End");
append_row("JavaScript Calculator", "https://rajdeepdev10.github.io/javascript_calculator/", "A simple react calculator", ["React", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/javascript_calculator", "freeCodeCamp Front End");
append_row("Drum Machine", "https://rajdeepdev10.github.io/drum_machine/", "A drum machine simulator", ["jQuery", "Bootstrap", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/drum_machine", "freeCodeCamp Front End");
append_row("Markdown Previewer", "https://rajdeepdev10.github.io/markdown_previewer/", "Previewer for Markdown syntax", ["Bootstrap", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/markdown_previewer", "freeCodeCamp Front End");
append_row("Random Quote Machine", "https://rajdeepdev10.github.io/random-quote-machine/", "A random quote generator of F1 drivers", ["Bootstrap", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/random-quote-machine", "freeCodeCamp Front End");
append_row("Library", "https://rajdeepdev10.github.io/library/", "A virtual 'library' app", ["HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/library", "The Odin Proj JavaScript");
append_row("Calculator", "https://rajdeepdev10.github.io/calculator/", "A simple javascript calculator", ["HTML", "CSS", "JavaScript"], "Click here", "The Odin Proj Foundations");
append_row("Homepage", "https://rajdeepdev10.github.io/homepage/", "A static webpage using Bootstrap", ["Bootstrap", "HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/homepage", "CS50x");
append_row("Etch-a-sketch", "https://rajdeepdev10.github.io/etch-a-sketch/", "Something between a sketchpad and an Etch-A-Sketch", ["HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/etch-a-sketch", "The Odin Proj Foundations");
append_row("Rock-paper-scissors", "https://rajdeepdev10.github.io/rock-paper-scissors/", "The classic RPS game", ["HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/rock-paper-scissors", "The Odin Proj Foundations");
append_row("Google homepage", "https://rajdeepdev10.github.io/google-hompage/", "	Clone of google.com", ["HTML", "CSS", "JavaScript"], "https://github.com/rajdeepdev10/google-hompage", "The Odin Proj Foundations");



// addeventListener for filter
filter.addEventListener("change", filter_table);


// filters table
function filter_table () {
    let language_arr = get_language_arr();
    const rows = document.getElementsByTagName("tr");

    // populate table first
    for (let i = 1; i < rows.length; i++) {
        rows[i].classList.remove("hide");
    }

    for (let i = 1; i < rows.length; i++) {
        if (!language_arr[i-1].includes(filter.value) && filter.value !== "") {
            rows[i].classList.add("hide");
        }
    }

}




// returns an array of languages by table index
function get_language_arr () {
    const rows = document.getElementsByTagName("tr");
    let language_arr = [];

    for (let i = 1; i < rows.length; i++) {
        language_arr.push(rows[i].children[2].innerHTML.split(","));
    }

    return language_arr;
}
