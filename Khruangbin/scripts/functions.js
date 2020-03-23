
document.getElementById("button-europe").addEventListener("click", function(){
    document.getElementById("date-europe").innerHTML = `
    Thu 27 Jun 2019 —<br>
    Sun 30 Jun 2019 :	Rock Werchter 2019 - Rotselaar, Belgium<br>
    
    Fri 28 Jun 2019 :	Festivalpark Werchter - Werchter, Belgium<br>
    
    Sat 29 Jun 2019 :	Théâtre de la Mer - Sete, France<br>
    
    Sat 29 Jun 2019 —<br>
    Sat 06 Jul 2019 :	Roskilde Festival 2019 - Roskilde, Denmark<br>
    
    Tue 02 Jul 2019 :	Montreux Jazz Lab - Montreux, Switzerland<br>
    
    Fri 05 Jul 2019 —<br>
    Sun 07 Jul 2019 :	Down the Rabbit Hole 2019 - Beuningen, Netherlands<br>
    
    Thu 11 Jul 2019 —<br>
    Sat 13 Jul 2019 :	Bilbao BBK Live 2019 - Bilbao, Spain<br>
    
    Fri 12 Jul 2019 —<br>
    Sun 14 Jul 2019 :	Mostly Jazz, Funk & Soul Festival 2019 - Moseley, UK
    `;

    document.getElementById("date-europe2").innerHTML = `
    Sat 13 Jul 2019 :	Kobetamendi	Bilbao, Spain<br>
    
    Sat 13 Jul 2019 :	Barclaycard British Summer Time 2019 - London, UK<br>
    
    Wed 17 Jul 2019 :	EJEKT FESTIVAL 2019 - Athens, Greece<br>
    
    Wed 17 Jul 2019 —<br>
    Sat 20 Jul 2019 :	Gurtenfestival 2019 - Bern, Switzerland<br>
    
    Thu 18 Jul 2019 —<br>
    Sun 21 Jul 2019 :	Latitude Festival 2019 - Suffolk, UK<br>
    
    Wed 07 Aug 2019 —<br>
    Tue 13 Aug 2019 :	Sziget Festival 2019 - Budapest, Hungary<br>
    
    Thu 08 Aug 2019 —<br>
    Sat 10 Aug 2019 :	Haldern Pop Festival 2019 - Rees, Germany<br>
    
    Thu 08 Aug 2019 —<br>
    Sat 10 Aug 2019 :	Way Out West Festival 2019 - Gothenburg, Sweden<br>
    
    Fri 09 Aug 2019 —<br>
    Sun 11 Aug 2019 :	Flow Festival 2019 - Helsinki, Finland
    `;
    
    document.getElementById("date-asie").innerHTML = "";
    document.getElementById("date-amerique2").innerHTML = "";
    document.getElementById("date-amerique").innerHTML = "";
    document.getElementById("date-afrique").innerHTML = "";
    
})

document.getElementById("button-asie").addEventListener("click", function(){
    document.getElementById("date-asie").innerHTML = `
    Fri 26 Jul 2019 —<br>
    Sun 28 Jul 2019 :	Fuji Rocks 2019 - Fuji, Japan
    `;
    
    document.getElementById("date-europe2").innerHTML = "";
    document.getElementById("date-europe").innerHTML = "";
    document.getElementById("date-amerique2").innerHTML = "";
    document.getElementById("date-amerique").innerHTML = "";
    document.getElementById("date-afrique").innerHTML = "";
})

document.getElementById("button-amerique").addEventListener("click", function(){
    document.getElementById("date-amerique").innerHTML = `
    Wed 19 Jun 2019 :	The Capitol Theatre - Port Chester, NY, US<br>
    
    Thu 20 Jun 2019 :	SummerStage, Central Park - New York, NY, US<br>
    
    Fri 21 Jun 2019 :	State Theatre - Portland, ME, US<br>
    
    Sat 22 Jun 2019 :	Théâtre Corona - Montreal, QC, Canada<br>
    
    Fri 19 Jul 2019 —<br>
    Sun 21 Jul 2019 :	Pitchfork Music Festival 2019 - Chicago, IL, US


    `;
    document.getElementById("date-amerique2").innerHTML = `
    Wed 31 Jul 2019 :	The Republik - Honolulu, HI, US<br>
    
    Fri 02 Aug 2019 —<br>
    Sun 04 Aug 2019 :	Pickathon 2019 - Happy Valley, OR, US<br>
    
    Fri 02 Aug 2019 —<br>
    Sun 04 Aug 2019 :	Kaslo Jazz Festival 2019 - Kaslo, BC, Canada
    `;
    
    document.getElementById("date-europe2").innerHTML = "";
    document.getElementById("date-europe").innerHTML = "";
    document.getElementById("date-afrique").innerHTML = "";
    document.getElementById("date-asie").innerHTML = "";
})

document.getElementById("button-afrique").addEventListener("click", function(){
    document.getElementById("date-afrique").innerHTML = `
    --- AUCUNES DATES POUR LE MOMENT ---
    <br>
    `;
    
    document.getElementById("date-europe2").innerHTML = "";
    document.getElementById("date-europe").innerHTML = "";
    document.getElementById("date-amerique2").innerHTML = "";
    document.getElementById("date-amerique").innerHTML = "";
    document.getElementById("date-asie").innerHTML = "";
})