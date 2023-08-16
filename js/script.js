// // let list = document.getElementsByClassName('w-layout-grid grid');
// let grid = document.querySelector(".clg-grid");

// // let filterInput = document.getElementById("filterInput");

// let listColleges = [
//     {
//         id : 1,
//         actualRating : 4,
//         ratingStar: '/assets/stars/4-STAR.png',
//         clgName : 'Atharva College',
//         clgLocation : 'Malad',
//         Branch: 'Information Technology',
//         twentyThreePercent: '91.26',
//         twentyTWOPercent: '80.26',
//         twentyONEPercent: '70.26',
//         feeAmount: '90,500',
//         clgImg: "/assets/clg/1.jpg",
//     },
//     {
//         id : 2,
//         actualRating : 3,
//         ratingStar: '/assets/stars/3-STAR.png',
//         clgName : 'Thakur College',
//         clgLocation : 'Kandivali',
//         Branch: 'Computer Engineering',
//         twentyThreePercent: '98.26',
//         twentyTWOPercent: '88.26',
//         twentyONEPercent: '78.26',
//         feeAmount: '40,500',
//         clgImg: "/assets/clg/2.jpg",
//     },
//     {  
//     id : 3,
//     actualRating : 2,
//     ratingStar: '/assets/stars/2-STAR.png',
//     clgName : 'Thadomal Shahani',
//     clgLocation : 'Bandra',
//     Branch: 'Electronics',
//     twentyThreePercent: '95.26',
//     twentyTWOPercent: '85.26',
//     twentyONEPercent: '75.26',
//     feeAmount: '45,500',
//     clgImg: "/assets/clg/3.jpg",
//     },
//     {
//         id : 4,
//         actualRating : 1,
//         ratingStar: '/assets/stars/1-STAR.png',
//         clgName : 'Vivekanand College',
//         clgLocation : 'Andheri',
//         Branch: 'Computer Engineering',
//         twentyThreePercent: '99.26',
//         twentyTWOPercent: '89.26',
//         twentyONEPercent: '79.26',
//         feeAmount: '70,500',
//         clgImg: "/assets/clg/4.jpg",
//     },

// ];

// // //filtering result
// // filterInput.addEventListener('keyup',filterClg);

// // function filterClg(){
// //     let filterValue = filterInput.value.toUpperCase();
// //     let card = grid.getElementsByClassName('card');

// //     for(let i=0; i<card.length;i++){
// //         let span = card[i].querySelector(".clg-name")
        
// //         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
// //             card[i].style.display = "initial";
// //         }else{
// //             card[i].style.display = "none";
// //         }
// //     }
// // }


// //Displaying cards

// for(let value of listColleges){
//     addElement(grid,value)
// }

// function addElement(appendIn,value){
//     let div = document.createElement('div'); //created div
//     div.className = "card";  //naming < div class="card">
//     let {actualRating,ratingStar,clgName,clgLocation,Branch,twentyThreePercent,twentyTWOPercent,twentyONEPercent,feeAmount,clgImg} = value;
//     div.innerHTML = `
    
//     <div class="image-container">
//     <div class="rating">
//         <h3 class="actual-rating-2">${actualRating}</h3>
//         <h3 class="outof-5-2">/5</h3><img loading="lazy" src="${ratingStar}" alt="" class="stars" /></div><img sizes="(max-width: 479px) 303.9930725097656px, 325.0000305175781px"
//         srcset="${clgImg}" alt="" class="clg-img" />
//     <div class="gradient"></div>
// </div>
// <div class="clgname-location-div">
//     <h1 class="clg-name">${clgName}</h1>
//     <div class="location-div"><img width="16" loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64c4dc45434d9807c614a578_Location%20pin.png" alt="" />
//         <div class="clg-location-2">${clgLocation}</div>
//         <div class="ranking-2"><strong class="bold-text"># NIRF ranking 251 out of 300</strong></div>
//     </div>
// </div>
// <div class="clg-info-div">
//     <h2 class="branch">${Branch}</h2>
//     <div class="cutoff-div">
//         <div class="mht-cet_cuttoff-2 cutoff">
//             <div class="text cutoff">MHTCET- CUTOFF</div>
//         </div>
//         <div class="_2023-2"> 2023 :</div>
//         <div class="_2022-2">2022 :</div>
//         <div class="_2021-2">2021 :</div>
//         <div class="_2023-percentile-2">${twentyThreePercent + '%'}</div>
//         <div class="_2022-percentile-2">${twentyTWOPercent + '%'}</div>
//         <div class="_2021-percentile-2">${twentyONEPercent + '%'}</div>
//     </div>
//     <div class="dividing-line-2"></div>
//     <div class="rightsidefee-div">
//         <div class="exams-accepted-2 accepted-exam">
//             <div class="text-copy accepted-exam">Exams Accepted</div>
//             <div class="exams-img-logo"><img loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d4a1b08ad982a9bdd7ae11_jee%20logo.png" alt="MHT-CET" class="jee" />
//                 <div class="jee_mains-2">JEE Mains</div>
//                 <div class="line-2">|</div>
//                 <div class="cet-2">MHT-CET</div><img loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d49fbaa077b6c3c418f583_asdad.png" alt="MHT-CET" class="mhtcet" /></div>
//             <div class="fee-div-2 fees">
//                 <div class="yearly-fees bruh">Yearly Fees <span class="text-span">(OPEN)</span></div>
//                 <div class="actual-fig-2"><span class="actual-fees">${feeAmount}</span><span class="text-span-3"> (Approx)</span></div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// `
// appendIn.appendChild(div); //inside <div> .card v

// }
document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelector(".clg-grid");

    let listColleges = [
           {
        id : 1,
        actualRating : 4,
        ratingStar: '/assets/stars/4-STAR.png',
        clgName : 'Atharva College',
        clgLocation : 'Malad',
        Branch: 'Information Technology',
        twentyThreePercent: '91.26',
        twentyTWOPercent: '80.26',
        twentyONEPercent: '70.26',
        feeAmount: '90,500',
        jeeMains : 'Jee Mains',
        clgImg: "/assets/clg/1.jpg",
    },
    {
        id : 2,
        actualRating : 3,
        ratingStar: '/assets/stars/3-STAR.png',
        clgName : 'Thakur College',
        clgLocation : 'Kandivali',
        Branch: 'Computer Engineering',
        twentyThreePercent: '98.26',
        twentyTWOPercent: '88.26',
        twentyONEPercent: '78.26',
        feeAmount: '40,500',
        jeeMains : 'J̶E̶E̶ M̶a̶i̶n̶s̶',
        clgImg: "/assets/clg/2.jpg",
    },
    {  
    id : 3,
    actualRating : 2,
    ratingStar: '/assets/stars/2-STAR.png',
    clgName : 'Thadomal Shahani',
    clgLocation : 'Bandra',
    Branch: 'Electronics',
    twentyThreePercent: '95.26',
    twentyTWOPercent: '85.26',
    twentyONEPercent: '75.26',
    feeAmount: '45,500',
    jeeMains : 'J̶E̶E̶ M̶a̶i̶n̶s̶',
    clgImg: "/assets/clg/3.jpg",
    },
    {
        id : 4,
        actualRating : 1,
        ratingStar: '/assets/stars/1-STAR.png',
        clgName : 'Vivekanand College',
        clgLocation : 'Andheri',
        Branch: 'Computer Engineering',
        twentyThreePercent: '99.26',
        twentyTWOPercent: '89.26',
        twentyONEPercent: '79.26',
        feeAmount: '70,500',
        jeeMains : 'Jee Mains',
        clgImg: "/assets/clg/4.jpg",
    },

    ];

    for (let value of listColleges) {
        addElement(grid, value);
    }

    function addElement(appendIn, value) {
        let div = document.createElement("div");
        div.className = "card";
        let {
            actualRating,
            ratingStar,
            clgName,
            clgLocation,
            Branch,
            twentyThreePercent,
            twentyTWOPercent,
            twentyONEPercent,
            feeAmount,
            jeeMains,
            clgImg,
        } = value;
        div.innerHTML = `
        <div class="image-container">
            <div class="rating">
                <h3 class="actual-rating-2">${actualRating}</h3>
                <h3 class="outof-5-2">/5</h3><img loading="lazy" src="${ratingStar}" alt="" class="stars" /></div><img sizes="(max-width: 479px) 303.9930725097656px, 325.0000305175781px"
                srcset="${clgImg}" alt="" class="clg-img" />
            <div class="gradient"></div>
        </div>
        <div class="clgname-location-div">
            <h1 class="clg-name">${clgName}</h1>
            <div class="location-div"><img width="16" loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64c4dc45434d9807c614a578_Location%20pin.png" alt="" />
                <div class="clg-location-2">${clgLocation}</div>
                <div class="ranking-2"><strong class="bold-text"># NIRF ranking 251 out of 300</strong></div>
            </div>
        </div>
        <div class="clg-info-div">
            <h2 class="branch">${Branch}</h2>
            <div class="cutoff-div">
                <div class="mht-cet_cuttoff-2 cutoff">
                    <div class="text cutoff">MHTCET- CUTOFF</div>
                </div>
                <div class="_2023-2"> 2023 :</div>
                <div class="_2022-2">2022 :</div>
                <div class="_2021-2">2021 :</div>
                <div class="_2023-percentile-2">${twentyThreePercent + '%'}</div>
                <div class="_2022-percentile-2">${twentyTWOPercent + '%'}</div>
                <div class="_2021-percentile-2">${twentyONEPercent + '%'}</div>
            </div>
            <div class="dividing-line-2"></div>
            <div class="rightsidefee-div">
                <div class="exams-accepted-2 accepted-exam">
                    <div class="text-copy accepted-exam">Exams Accepted</div>
                    <div class="exams-img-logo"><img loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d4a1b08ad982a9bdd7ae11_jee%20logo.png" alt="MHT-CET" class="jee" />
                        <div class="jee_mains-2">${jeeMains}</div>
                        <div class="line-2">|</div>
                        <div class="cet-2">MHT-CET</div><img loading="lazy" src="https://uploads-ssl.webflow.com/64c4b66a44c38c5fa4309e5a/64d49fbaa077b6c3c418f583_asdad.png" alt="MHT-CET" class="mhtcet" /></div>
                    <div class="fee-div-2 fees">
                        <div class="yearly-fees bruh">Yearly Fees <span class="text-span">(OPEN)</span></div>
                        <div class="actual-fig-2"><span class="actual-fees">${feeAmount}</span><span class="text-span-3"> (Approx)</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        `;
        appendIn.appendChild(div);
    }
});
