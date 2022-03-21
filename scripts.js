let agentList = document.querySelectorAll(".agent");
let skillList = document.querySelectorAll(".skill");
let skillSubtitleList = document.querySelectorAll(".skill__subtitle");
let skillDescriptionList = document.querySelectorAll(".skill_description");
let svgContainerList = document.querySelectorAll(".skill__img");
let videoBackground = document.querySelector(".videoBackground");
let agentMovie = document.querySelector(".agentMovie");
let playVideoHero = document.querySelector(".skill__playVideoHero");
let videoSourceMp4 = document.createElement("source");
let videoSourceWebm = document.createElement("source");
let videoSourceOgg = document.createElement("source");


videoSourceMp4.setAttribute('src', '');
videoSourceWebm.setAttribute('src', '');
videoSourceOgg.setAttribute('src', '');
videoSourceMp4.setAttribute('type', 'video/mp4');
videoSourceWebm.setAttribute('type', 'video/webm');
videoSourceOgg.setAttribute('type', 'video/ogg');

agentMovie.appendChild(videoSourceMp4);
agentMovie.appendChild(videoSourceWebm);
agentMovie.appendChild(videoSourceOgg);

agentDemonstration('img/sage/GOLDENMOMENT.mp4', 'img/sage/GOLDENMOMENT.webm', 'img/sage/GOLDENMOMENT.ogv');

for (let i = 0; i < agentList.length; i++) {
    agentClick(agentList[i], i);
}


function agentDemonstration(videoMp4, videoWebm, videoOgg) {



    videoBackground.addEventListener("click", function (evt) {
        evt.preventDefault();

        videoBackground.classList.add("visuallyHidden");
        agentMovie.pause();
        videoSourceMp4.setAttribute('src', '');
        videoSourceWebm.setAttribute('src', '');
        videoSourceOgg.setAttribute('src', '');
        agentMovie.classList.add("visuallyHidden");

    });

    playVideoHero.addEventListener("click", function (evt) {
        evt.preventDefault();

        videoSourceMp4.setAttribute('src', videoMp4);
        videoSourceWebm.setAttribute('src', videoWebm);
        videoSourceOgg.setAttribute('src', videoOgg);
        videoBackground.classList.remove("visuallyHidden");
        agentMovie.classList.remove("visuallyHidden");
        agentMovie.currentTime = 0;
        agentMovie.load();
        agentMovie.play();


    });

    agentMovie.addEventListener("ended", function () {

        videoBackground.classList.add("visuallyHidden");
        agentMovie.classList.add("visuallyHidden");
        videoSourceMp4.setAttribute('src', '');
        videoSourceWebm.setAttribute('src', '');
        videoSourceOgg.setAttribute('src', '');
    }, false);

}



function agentClick(agent, agentNumber) {

    agent.addEventListener("click", function (evt) {
        evt.preventDefault();

        for (let element of agentList) {
            if (element.classList.contains("agent_active")) {
                element.classList.remove("agent_active");
            }
        }
        agent.classList.add("agent_active");

        switch (agentNumber) {
            case 0:
                for (let x = 0; x < skillList.length; x++) {
                    switch (x) {
                        case 0:
                            skillSubtitleList[0].innerHTML = 'Curveball';
                            skillDescriptionList[0].innerHTML = 'Curve the flare orb to the left, detonating and blinding any player who sees the orb.';
                            svgContainerList[0].innerHTML = '<svg width="134" height="182" viewBox="0 0 134 182" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M123.445 0L98.4637 49.3199C106.602 57.0211 111.675 67.9042 111.675 79.9676C111.675 82.5857 111.436 85.1487 110.979 87.6351L134 106.159L106.603 100.025C100.436 111.398 89.1866 119.637 75.8858 121.722L69.2346 182L63.7513 121.888C59.7887 121.379 55.9975 120.326 52.4556 118.806L37.0971 129.113L43.8067 113.814C33.9068 106.425 27.3558 94.8268 26.8279 81.6859L0 71.2857L28.4337 68.2917C30.1479 62.3382 33.1403 56.9232 37.096 52.3593L37.0971 41.7701L49.7965 42.3819C53.3277 40.5667 57.1478 39.2306 61.1699 38.4598H60.7465L67.2637 3.88179L73.6861 37.9272C78.6242 38.44 83.3105 39.7959 87.5974 41.8482L123.445 0ZM69.2346 60.2415C58.2959 60.2415 49.4288 69.0733 49.4288 79.9676C49.4288 90.8619 58.2959 99.6937 69.2346 99.6937C80.1727 99.6937 89.0403 90.8619 89.0403 79.9676C89.0403 69.0733 80.1727 60.2415 69.2346 60.2415Z" fill="#1F2326"/></svg>';
                            break;
                        case 1:
                            skillSubtitleList[1].innerHTML = 'Hot hands';
                            skillDescriptionList[1].innerHTML = 'throw a fireball that explodes after a set amount of time or upon hitting the ground.';
                            svgContainerList[1].innerHTML = '<svg width="93" height="167" viewBox="0 0 93 167" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.641 0C32.7649 21.7267 24.8976 62.7262 44.7232 71.0089C57.941 76.5312 60.5361 61.4182 52.5102 25.6713C65.6795 44.4819 71.3408 62.626 69.4945 80.104C71.9424 81.4989 74.2546 83.112 76.4015 84.9161C79.5615 83.0216 81.141 79.3918 81.141 74.0321C84.5605 80.269 85.399 86.4446 83.6559 92.5588C89.5203 100.337 93 110.02 93 120.516C93 146.188 72.1812 167 46.5 167C20.8188 167 0 146.188 0 120.516C0 113.117 1.72931 106.122 4.80614 99.9122C1.78169 92.9065 2.58491 83.2706 7.21778 71.0089C7.21778 82.0491 9.30588 84.7053 11.7718 86.2673C12.4664 86.7069 13.2946 86.9613 14.2564 87.0296C15.6553 85.6764 17.1355 84.4195 18.691 83.2574C16.2505 51.2351 22.8995 23.4812 38.641 0ZM46.5 98.4976C34.3351 98.4976 24.4737 108.355 24.4737 120.516C24.4737 129.985 30.4531 138.058 38.8437 141.168C39.6523 133.552 42.8221 128.32 48.3551 125.463C48.3551 131.567 47.5563 137.778 51.733 141.907C61.3766 139.556 68.5263 130.871 68.5263 120.516C68.5263 108.355 58.6649 98.4976 46.5 98.4976Z" fill="#1F2326"/></svg>';
                            break;
                        case 2:
                            skillSubtitleList[2].innerHTML = 'Run it back';
                            skillDescriptionList[2].innerHTML = 'Bring Phoenix back to this location with full health.';
                            svgContainerList[2].innerHTML = '<svg width="227" height="168" viewBox="0 0 227 168" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47.5023 0.0989312C39.3246 47.8495 48.7016 116.923 107.194 168C79.0124 166.67 56.5205 162.735 39.7193 156.196C49.9804 149.619 55.1106 146.331 55.1106 146.331C-4.19073 107.373 -3.66485 58.5057 3.02648 45.8677C9.39566 59.5423 16.1071 67.8266 23.1608 70.7212C20.9934 40.2939 29.1071 16.7533 47.5023 0.0989312ZM179.498 0C197.893 16.6544 206.006 40.1949 203.839 70.6222C210.893 67.7283 217.604 59.4434 223.973 45.7694C230.665 58.4068 231.191 107.274 171.89 146.232C171.89 146.232 177.02 149.521 187.281 156.097C170.48 162.636 147.988 166.571 119.806 167.901C178.298 116.824 187.675 47.7506 179.498 0ZM151.002 82.5521C153.93 98.6172 137.537 116.302 113.506 130.586L113.507 130.59H113.5C89.4696 116.302 73.0776 98.6172 76.0047 82.5521C78.9317 66.4844 105.413 61.0842 113.507 82.5521L113.5 82.5452L113.977 81.3655C122.585 61.292 148.13 66.7881 151.002 82.5521ZM113.5 31.0931C120.465 31.0931 126.111 36.6613 126.111 43.53C126.111 50.3988 120.465 55.967 113.5 55.967C106.535 55.967 100.889 50.3988 100.889 43.53C100.889 36.6613 106.535 31.0931 113.5 31.0931Z" fill="#1F2326"/></svg>';
                            break;
                    }
                }
                agentDemonstration('img/phoenix/GOLDENMOMENT.mp4', 'img/phoenix/GOLDENMOMENT.webm', 'img/phoenix/GOLDENMOMENT.ogv');
                break;
            case 1:
                for (let x = 0; x < skillList.length; x++) {
                    switch (x) {
                        case 0:
                            skillSubtitleList[0].innerHTML = 'Updraft';
                            skillDescriptionList[0].innerHTML = 'INSTANTLY propel Jett high into the air.';
                            svgContainerList[0].innerHTML = '<svg width="125" height="166" viewBox="0 0 125 166" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M65.5032 120.402L84.7343 135.761C85.8745 136.672 86.5384 138.051 86.5384 139.509V166L62.5 146.801L38.4616 166V139.509C38.4616 138.051 39.1255 136.672 40.2657 135.761L59.4968 120.402C61.2523 119 63.7477 119 65.5032 120.402ZM65.7162 63.2972L108.985 102.174C109.999 103.085 110.577 104.381 110.577 105.742V132.403L65.7162 92.095C63.888 90.4525 61.112 90.4525 59.2838 92.095L14.4231 132.403V105.742C14.4231 104.381 15.0014 103.085 16.0148 102.174L59.2838 63.2972C61.112 61.6542 63.888 61.6542 65.7162 63.2972ZM65.8995 1.40578L122.184 57.596C123.987 59.3962 125 61.8378 125 64.3836V98.8046L105.769 84.4059V71.9951C105.769 70.722 105.262 69.501 104.361 68.6009L65.8995 30.2037C64.0222 28.3293 60.9778 28.3293 59.1005 30.2037L20.6389 68.6009C19.7375 69.501 19.2306 70.722 19.2306 71.9951V84.4059L0 98.8046V64.3836C0 61.8378 1.01296 59.3962 2.8162 57.596L59.1005 1.40578C60.9778 -0.468593 64.0222 -0.468593 65.8995 1.40578Z" fill="#1F2326"/></svg>';
                            break;
                        case 1:
                            skillSubtitleList[1].innerHTML = 'Tailwind';
                            skillDescriptionList[1].innerHTML = 'INSTANTLY propel Jett in the direction she is moving.';
                            svgContainerList[1].innerHTML = '<svg width="188" height="146" viewBox="0 0 188 146" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M114.321 36.5C110.692 50.4049 101.618 57.3571 87.1016 57.3571H0C3.62921 46.9286 9.0731 41.7143 16.3313 41.7143H81.6576C74.3992 34.7621 67.1408 31.2857 59.8824 31.2857H32.6631C36.1272 24.6495 42.8984 21.1804 52.9763 20.8785L56.5214 20.8285C72.1206 20.3946 86.87 14.977 81.6576 0H108.877L186.271 69.1878C188.469 71.1531 188.587 74.4527 186.536 76.5577C186.451 76.6453 186.362 76.7303 186.271 76.8122L108.877 146H81.6576C87.1015 130.357 70.7702 125.143 54.4384 125.143C44.0458 125.143 36.9598 121.976 33.1804 115.641L32.6631 114.714H59.8824C66.7137 114.714 73.5451 111.635 80.3771 105.477L81.6576 104.286H16.3313C9.38867 104.286 4.10603 99.5152 0.483645 89.9735L0 88.6429H87.1016C101.134 88.6429 110.081 95.1393 113.94 108.133L114.321 109.5L152.428 73L114.321 36.5Z" fill="#1F2326"/></svg>';
                            break;
                        case 2:
                            skillSubtitleList[2].innerHTML = 'Blade storm';
                            skillDescriptionList[2].innerHTML = 'EQUIP a set of highly accurate knives that recharge on killing an opponent.';
                            svgContainerList[2].innerHTML = '<svg width="153" height="167" viewBox="0 0 153 167" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M76.5 0L77.21 1.67481C84.4785 19.2865 89.4785 45.8567 92.2085 81.3852L92.4579 84.7424L81.0732 98.8711V104.915C83.8757 104.915 92.4579 110.775 92.4579 119.804C92.4579 128.441 86.7954 132.734 84.7365 133.09L84.479 133.115V163.037C84.479 165.322 82.162 166.626 77.5282 166.946L76.5 167C71.1807 166.807 68.5211 165.486 68.5211 163.037V133.115C66.7315 133.115 60.5421 128.834 60.5421 119.804C60.5421 110.775 69.1244 104.915 71.9269 104.915V98.8711L60.5421 84.7424C63.2951 46.3633 68.6144 18.1155 76.5 0ZM0.0616668 25.8152L1.21952 26.9244C12.059 37.531 23.8262 55.2699 36.5211 80.1408L37.8849 82.8325L33.3392 96.6409L35.1574 101.056C37.3223 100.198 45.7164 101.849 48.4327 108.446C51.1494 115.042 47.6549 120.065 46.2723 120.613C52.5831 135.937 56.1067 144.494 56.8436 146.284C57.528 147.945 56.1475 149.598 52.7024 151.243L51.8711 151.622C47.7029 153.111 45.2503 152.96 44.5133 151.171L33.942 125.5C32.5594 126.049 26.4894 124.817 23.7726 118.221C21.0564 111.624 25.9254 104.716 28.0903 103.858L26.2716 99.4419L13.2248 92.6076C3.80629 63.7282 -0.581494 41.4641 0.0616668 25.8152ZM152.938 25.8152C153.581 41.4641 149.194 63.7282 139.775 92.6076L126.728 99.4419L124.91 103.858C127.075 104.716 131.944 111.624 129.227 118.221C126.511 124.817 120.441 126.049 119.058 125.5L108.487 151.171C107.75 152.96 105.297 153.111 101.129 151.622L100.298 151.243C96.8526 149.598 95.4725 147.945 96.1565 146.284C96.8934 144.494 100.417 135.937 106.728 120.613C105.345 120.065 101.851 115.042 104.567 108.446C107.284 101.849 115.678 100.198 117.843 101.056L119.661 96.6409L115.115 82.8325L116.479 80.1408C129.174 55.2699 140.941 37.531 151.781 26.9244L152.938 25.8152ZM76.5 112.203C72.0931 112.203 68.5211 115.708 68.5211 120.031C68.5211 124.355 72.0931 127.86 76.5 127.86C80.9069 127.86 84.479 124.355 84.479 120.031C84.479 115.708 80.9069 112.203 76.5 112.203ZM33.8161 107.781C30.4113 109.13 28.7054 112.785 30.0064 115.943C31.3069 119.101 35.1212 120.567 38.5259 119.218C41.9312 117.868 43.6366 114.214 42.3361 111.056C41.0356 107.897 37.2208 106.431 33.8161 107.781ZM119.184 107.781C115.779 106.431 111.964 107.897 110.664 111.056C109.363 114.214 111.069 117.868 114.474 119.218C117.879 120.567 121.693 119.101 122.994 115.943C124.295 112.785 122.589 109.13 119.184 107.781Z" fill="#1F2326"/></svg>';
                            break;
                    }
                }
                agentDemonstration('img/jett/GOLDENMOMENT.mp4', 'img/jett/GOLDENMOMENT.webm', 'img/jett/GOLDENMOMENT.ogv');
                break;
            case 2:
                for (let x = 0; x < skillList.length; x++) {
                    switch (x) {
                        case 0:
                            skillSubtitleList[0].innerHTML = 'Shock bolt';
                            skillDescriptionList[0].innerHTML = 'Send the explosive forward, detonating upon collision and damaging players nearby.';
                            svgContainerList[0].innerHTML = '<svg width="176" height="167" viewBox="0 0 176 167" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 68.7647L44 117.882L53.7778 98.2353L83.1111 167L53.7778 137.529L44 157.176L0 68.7647ZM176 68.7647L132 157.176L122.222 137.529L92.8889 167L122.222 98.2353L132 117.882L176 68.7647ZM88 0C94.5184 39.2941 105.926 60.5783 122.222 63.8529L88 132.618L53.7778 63.8529C69.7723 60.6392 81.0573 40.0761 87.6328 2.16447L88 0Z" fill="#1F2326"/></svg>';
                            break;
                        case 1:
                            skillSubtitleList[1].innerHTML = 'Recon bolt';
                            skillDescriptionList[1].innerHTML = 'EQUIP a bow with a recon bolt.';
                            svgContainerList[1].innerHTML = '<svg width="189" height="167" viewBox="0 0 189 167" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M173.25 146.125V167H15.75V146.125H173.25ZM85.5813 21.4073L75.5066 39.7084C52.9426 47.5167 36.75 68.8473 36.75 93.9375C36.75 110.389 43.712 125.224 54.8667 135.691L34.1785 135.694C25.872 123.858 21 109.463 21 93.9375C21 56.5869 49.1946 25.7827 85.5813 21.4073ZM103.424 21.4078C139.808 25.7858 168 56.589 168 93.9375C168 109.463 163.128 123.858 154.821 135.694L134.132 135.692C145.287 125.225 152.25 110.39 152.25 93.9375C152.25 68.851 136.062 47.523 113.504 39.7121L103.424 21.4078ZM94.5 0C146.691 0 189 42.0574 189 93.9375C189 108.936 185.464 123.112 179.176 135.69L167.26 135.691C174.409 123.408 178.5 109.148 178.5 93.9375C178.5 47.8215 140.892 10.4375 94.5 10.4375C48.1078 10.4375 10.5 47.8215 10.5 93.9375C10.5 109.148 14.5913 123.408 21.7397 135.691L9.82422 135.69C3.53588 123.112 0 108.936 0 93.9375C0 42.0574 42.3092 0 94.5 0ZM94.5 20.875L126 83.5C115.5 80.0207 108.5 80.0207 105 83.5C101.5 86.9793 98.0002 100.896 94.5 125.25C90.9998 100.896 87.5002 86.9793 84 83.5C80.4998 80.0207 73.5 80.0207 63 83.5L94.5 20.875Z" fill="#1F2326"/></svg>';
                            break;
                        case 2:
                            skillSubtitleList[2].innerHTML = 'Hunter`s fury';
                            skillDescriptionList[2].innerHTML = 'EQUIP a bow with three long-range wall-piercing energy blasts.';
                            svgContainerList[2].innerHTML = '<svg width="172" height="166" viewBox="0 0 172 166" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0506 110.667C47.8985 131.337 62.352 141.671 78.4118 141.671V166L73.5937 148.97C59.1402 146.537 42.2771 141.671 27.8235 114.91L35.0506 110.667ZM136.949 110.667L144.176 114.91C129.723 141.671 112.86 146.537 98.4063 148.97L93.5882 166V141.671C109.648 141.671 124.102 131.337 136.949 110.667ZM86 15.0909L106.235 55.3333H96.1176L86 120.727L75.8824 55.3333H65.7647L86 15.0909ZM65.7647 60.3636L70.8235 85.5152H35.4118L52.0563 90.3432C30.5639 96.7363 13.2116 105.187 0 115.697C7.72811 104.939 16.5186 95.2367 26.3716 86.5916L5.05882 65.3939L9.43066 67.5675C20.0481 72.8463 28.3233 76.9606 34.2563 79.9104L34.3853 79.9748C43.949 72.5465 54.4087 66.0096 65.7647 60.3636ZM106.235 60.3636C133.216 73.7779 155.137 92.2221 172 115.697C158.788 105.187 141.436 96.7363 119.944 90.3432L136.588 85.5152H101.176L106.235 60.3636ZM70.8235 0V30.1818L55.6471 55.3333H40.4706L55.6471 30.1818L70.8235 0ZM101.176 0L116.353 30.1818L131.529 55.3333H116.353L101.176 30.1818V0Z" fill="#1F2326"/></svg>';
                            break;
                    }
                }
                agentDemonstration('img/sova/GOLDENMOMENT.mp4', 'img/sova/GOLDENMOMENT.webm', 'img/sova/GOLDENMOMENT.ogv');
                break;
            case 3:
                for (let x = 0; x < skillList.length; x++) {
                    switch (x) {
                        case 0:
                            skillSubtitleList[0].innerHTML = 'Slow Orb';
                            skillDescriptionList[0].innerHTML = 'Cast out a radianite orb that breaks into a slowing field uponimpact with the ground.';
                            svgContainerList[0].innerHTML = '<svg width="167" height="161" viewBox="0 0 50 48" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M46.0318 24C46.0318 35.1509 36.6156 44.1905 25 44.1905C13.3844 44.1905 3.96825 35.1509 3.96825 24C3.96825 12.8491 13.3844 3.80952 25 3.80952C36.6156 3.80952 46.0318 12.8491 46.0318 24ZM50 24C50 37.2548 38.8071 48 25 48C11.1929 48 0 37.2548 0 24C0 10.7452 11.1929 0 25 0C38.8071 0 50 10.7452 50 24ZM21.8253 12.1904L17.4376 8.32933C14.2983 9.68747 11.6524 11.9104 9.8293 14.682L11.9046 18.6667L8.41514 17.3267C7.59486 19.2696 7.14305 21.3937 7.14305 23.6192C7.14305 24.6669 7.24319 25.6923 7.43472 26.6868L13.4919 25.5237L19.0475 16.3809L17.8569 25.5237L10.2407 33.1533C11.069 34.3012 12.0429 35.3449 13.1365 36.26L13.0951 36.1904L17.4601 32.7619L15.1915 37.7399C17.9075 39.4117 21.1375 40.3811 24.6033 40.3811C28.9051 40.3811 32.8436 38.8877 35.8868 36.4113L33.3332 33.1428L23.8094 32L32.5396 29.3333L32.9364 24.3809L28.5712 14.8571L35.7142 24V28.9523L40.0031 31.5257C41.3179 29.1704 42.0636 26.4784 42.0636 23.6192C42.0636 19.7968 40.731 16.2733 38.4872 13.4535L34.9206 17.9047L36.7508 11.5789C33.6081 8.65613 29.3246 6.85733 24.6033 6.85733C24.4706 6.85733 24.3382 6.8588 24.2062 6.8616V10.2856L25.3967 12.1904L23.4125 19.8095L21.8253 12.1904Z"fill="#1F2326" /></svg>';
                            break;
                        case 1:
                            skillSubtitleList[1].innerHTML = 'Healing Orb';
                            skillDescriptionList[1].innerHTML = 'Heal an ally or yourself to full health over a few seconds.';
                            svgContainerList[1].innerHTML = '<svg width="179" height="156" viewBox="0 0 52 46" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M3.77582 22.894L26 46L48.2243 22.894C53.301 17.6157 53.2523 9.26822 48.1139 4.04935C42.7983 -1.34978 34.0762 -1.34978 28.7605 4.04935L26 6.85315L23.2395 4.04935C17.9237 -1.34978 9.20168 -1.34978 3.88599 4.04935C-1.25226 9.26822 -1.30106 17.6157 3.77582 22.894ZM37.0023 20.4373C33.938 20.2861 31.3401 19.1021 29.2087 16.8852C27.0774 14.6685 26.0116 12.0242 26.0116 8.95253C26.0116 12.0242 24.9421 14.6685 22.8031 16.8852C20.6641 19.1021 18.0624 20.2861 14.9981 20.4373C17.0157 20.5282 18.8665 21.0994 20.5504 22.1511C22.2342 23.2027 23.5654 24.5947 24.5439 26.3274C25.5224 28.0599 26.0116 29.9401 26.0116 31.9677C26.0116 28.8808 27.0774 26.2252 29.2087 24.0009C31.3401 21.7765 33.938 20.5887 37.0023 20.4373Z"fill="#1F2326" /></svg>';
                            break;
                        case 2:
                            skillSubtitleList[2].innerHTML = 'Resurrection';
                            skillDescriptionList[2].innerHTML = 'Target a friendly corpse. After a short delay, revive them with full health.';
                            svgContainerList[2].innerHTML = '<svg width="170" height="170" viewBox="0 0 53 53" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M28.2267 2.15447C28.2267 3.34434 27.2605 4.30892 26.0686 4.30892C24.8769 4.30892 23.9106 3.34434 23.9106 2.15447C23.9106 0.964583 24.8769 0 26.0686 0C27.2605 0 28.2267 0.964583 28.2267 2.15447ZM34.2686 10.3413C34.2686 11.7692 33.1092 12.9266 31.679 12.9266C30.2488 12.9266 29.0893 11.7692 29.0893 10.3413C29.0893 8.91341 30.2488 7.75596 31.679 7.75596C33.1092 7.75596 34.2686 8.91341 34.2686 10.3413ZM21.3204 12.0649C22.274 12.0649 23.0469 11.2933 23.0469 10.3413C23.0469 9.38947 22.274 8.61769 21.3204 8.61769C20.367 8.61769 19.5941 9.38947 19.5941 10.3413C19.5941 11.2933 20.367 12.0649 21.3204 12.0649ZM37.4324 17.5336C39.1675 19.825 40.1968 22.6789 40.1968 25.7727C40.1968 33.325 34.0642 39.4474 26.4994 39.4474C18.9344 39.4474 12.8018 33.325 12.8018 25.7727C12.8018 22.6787 13.8312 19.8246 15.5667 17.5332L0.171997 5.17106C-0.403479 6.89468 0.430932 12.2377 3.19323 14.6507C4.48166 15.7762 5.66367 16.7892 6.7042 17.6809C7.89434 18.7009 8.89972 19.5625 9.66734 20.2523V23.2685L1.20483 16.8051C1.49255 18.9596 2.67087 23.8024 5.26052 25.9568C6.87527 27.3003 8.30053 28.3193 9.12306 28.9076C9.35581 29.074 9.54043 29.206 9.66734 29.3009V32.7481L4.05638 28.0083C3.76865 30.8809 6.04258 36.587 9.06373 38.7805C10.977 40.1698 14.2189 42.8927 17.5537 45.6939C20.8393 48.4537 24.2152 51.2893 26.5001 53C28.7849 51.2893 32.1605 48.4535 35.4461 45.6939C38.7809 42.8928 42.0229 40.1695 43.9362 38.7804C46.9574 36.5867 49.2314 30.8808 48.9435 28.0081L43.3326 32.748V29.3008C43.9081 28.8698 45.577 27.5772 47.6487 25.8537C50.1783 23.7492 50.786 19.1779 51.0811 16.9589L51.1015 16.8049L43.3326 23.2682V20.2521C44.1002 19.5624 45.1053 18.7009 46.2956 17.6809L46.2975 17.6793C47.3375 16.7879 48.5191 15.7753 49.8067 14.6505C52.569 12.2375 53.4035 6.89438 52.828 5.17087L37.4324 17.5336ZM26.4997 36.195C32.2206 36.195 36.8582 31.565 36.8582 25.8536C36.8582 20.1422 32.2206 15.5123 26.4997 15.5123C20.7788 15.5123 16.141 20.1422 16.141 25.8536C16.141 31.565 20.7788 36.195 26.4997 36.195Z"fill="#1F2326" /></svg>';
                            break;
                    }
                }
                agentDemonstration('img/sage/GOLDENMOMENT.mp4', 'img/sage/GOLDENMOMENT.webm', 'img/sage/GOLDENMOMENT.ogv');
                break;
        }

    });
}



const mediaQuery2662px = window.matchMedia('(max-width: 2662px)')
let playVideoHeroImg = document.querySelector(".skill__playVideoHeroImg");
function handleTabletChange2662px(e) {
  if (e.matches) {
    agentMovie.setAttribute("width", "1260");
    agentMovie.setAttribute("height", "1015");
    playVideoHeroImg.setAttribute("width", "100");
    playVideoHeroImg.setAttribute("height", "100");
  }
  else {
    playVideoHeroImg.setAttribute("width", "21");
    playVideoHeroImg.setAttribute("height", "18");
    agentMovie.setAttribute("width", "1560");
    agentMovie.setAttribute("height", "1315");
  }
}
mediaQuery2662px.addListener(handleTabletChange2662px)
handleTabletChange2662px(mediaQuery2662px)

const mediaQuery1920px = window.matchMedia('(max-width: 1920px)')
function handleTabletChange1920px(e) {
  if (e.matches) {
    agentMovie.setAttribute("width", "860");
    agentMovie.setAttribute("height", "715");
  }
  else {
    agentMovie.setAttribute("width", "1260");
    agentMovie.setAttribute("height", "1015");
  }
}
mediaQuery1920px.addListener(handleTabletChange1920px);
handleTabletChange1920px(mediaQuery1920px);

const mediaQuery1366px = window.matchMedia('(max-width: 1366px)')
function handleTabletChange1366px(e) {
  if (e.matches) {
    agentMovie.setAttribute("width", "660");
    agentMovie.setAttribute("height", "515");
  }
  else {
    agentMovie.setAttribute("width", "860");
    agentMovie.setAttribute("height", "715");
  }
}
mediaQuery1366px.addListener(handleTabletChange1366px);
handleTabletChange1366px(mediaQuery1366px);
