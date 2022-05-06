import keyCodeObj from './translate.js'

const body = document.querySelector('body')

function init() {
    let content = `
    <div class="wrapper">
        <h1 class="h1">RSS Virtual Keyboard</h1>
        <form action="" method="post" class="form">
            <label for="textarea"></label>
            <textarea name="textarea" id="textarea" class="textarea"></textarea>
        </form>
        <div class="keyboard">
            <div class="row">
                <div class="keys" data-keyCode="192" data-location="0">\`</div>
                <div class="keys" data-keyCode="49" data-location="0">1</div>
                <div class="keys" data-keyCode="50" data-location="0">2</div>
                <div class="keys" data-keyCode="51" data-location="0">3</div>
                <div class="keys" data-keyCode="52" data-location="0">4</div>
                <div class="keys" data-keyCode="53" data-location="0">5</div>
                <div class="keys" data-keyCode="54" data-location="0">6</div>
                <div class="keys" data-keyCode="55" data-location="0">7</div>
                <div class="keys" data-keyCode="56" data-location="0">8</div>
                <div class="keys" data-keyCode="57" data-location="0">9</div>
                <div class="keys" data-keyCode="48" data-location="0">0</div>
                <div class="keys" data-keyCode="189" data-location="0">-</div>
                <div class="keys" data-keyCode="187" data-location="0">=</div>
                <div class="keys btn" data-keyCode="8" data-location="0">Backspace</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="9" data-location="0">Tab</div>
                <div class="keys" data-keyCode="81" data-location="0">q</div>
                <div class="keys" data-keyCode="87" data-location="0">w</div>
                <div class="keys" data-keyCode="69" data-location="0">e</div>
                <div class="keys" data-keyCode="82" data-location="0">r</div>
                <div class="keys" data-keyCode="84" data-location="0">t</div>
                <div class="keys" data-keyCode="89" data-location="0">y</div>
                <div class="keys" data-keyCode="85" data-location="0">u</div>
                <div class="keys" data-keyCode="73" data-location="0">i</div>
                <div class="keys" data-keyCode="79" data-location="0">o</div>
                <div class="keys" data-keyCode="80" data-location="0">p</div>
                <div class="keys" data-keyCode="219" data-location="0">[</div>
                <div class="keys" data-keyCode="221" data-location="0">]</div>
                <div class="keys" data-keyCode="220" data-location="0">\\</div>
                <div class="keys btn" data-keyCode="46" data-location="0">Delete</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="20" data-location="0">Caps Lock</div>
                <div class="keys" data-keyCode="65" data-location="0">a</div>
                <div class="keys" data-keyCode="83" data-location="0">s</div>
                <div class="keys" data-keyCode="68" data-location="0">d</div>
                <div class="keys" data-keyCode="70" data-location="0">f</div>
                <div class="keys" data-keyCode="71" data-location="0">g</div>
                <div class="keys" data-keyCode="72" data-location="0">h</div>
                <div class="keys" data-keyCode="74" data-location="0">j</div>
                <div class="keys" data-keyCode="75" data-location="0">k</div>
                <div class="keys" data-keyCode="76" data-location="0">l</div>
                <div class="keys" data-keyCode="186" data-location="0">;</div>
                <div class="keys" data-keyCode="222" data-location="0">'</div>
                <div class="keys btn" data-keyCode="13" data-location="0">Enter</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="16" data-location="1">Shift</div>
                <div class="keys" data-keyCode="90" data-location="0">z</div>
                <div class="keys" data-keyCode="88" data-location="0">x</div>
                <div class="keys" data-keyCode="67" data-location="0">c</div>
                <div class="keys" data-keyCode="86" data-location="0">v</div>
                <div class="keys" data-keyCode="66" data-location="0">b</div>
                <div class="keys" data-keyCode="78" data-location="0">n</div>
                <div class="keys" data-keyCode="77" data-location="0">m</div>
                <div class="keys" data-keyCode="188" data-location="0">,</div>
                <div class="keys" data-keyCode="190" data-location="0">.</div>
                <div class="keys" data-keyCode="191" data-location="0">/</div>
                <div class="keys btn" data-keyCode="38" data-location="0">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-up"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="16" data-location="2">Shift</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="17" data-location="1">Ctrl</div>
                <div class="keys btn" data-keyCode="91" data-location="0">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#windows"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="18" data-location="1">Alt</div>
                <div class="keys space" data-keyCode="32" data-location="0">Space</div>
                <div class="keys btn" data-keyCode="18"  data-location="2">Alt</div>
                <div class="keys btn" data-keyCode="37" data-location="0">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-left"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="40" data-location="0">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-down"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="39" data-location="0">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-right"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="17" data-location="2">Ctrl</div>
            </div>
        </div>
        <div class="message">
            <p class="message-text">Клавиатура создана в операционной системе Windows</p>
            <p class="message-text">Для переключения языка комбинация: shift + alt</p>
        </div>
    </div>
    `
    body.insertAdjacentHTML('afterbegin', content)
}

init()

const keyboard = document.querySelector('.keyboard')
const arrKeys = keyboard.querySelectorAll('div[data-keyCode]')

let lang = 'en'

// const arrKeyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 17, 91, 18, 32, 18, 17, 37, 40, 39]

document.onkeydown = function(event) {
    // console.log('event', event);

    catchModifiersEvent(event)
    // console.log('event.code:', event.code);
    // console.log('event.key:', event.key);
    // console.log('event.keyCode:', event.keyCode);
    // console.log('event.location:', event.location);
    let obj = {'keyCode': event.keyCode, 'location': event.location}
    toggleActiveBtn(obj, arrKeys)
}

function toggleActiveBtn(obj, arr) {
    let result = Array.from(arr).find((item) => {
        if (item.dataset.keycode == obj.keyCode && obj.keyCode == 16) {
            return item.dataset.location == obj.location
        }
        if (item.dataset.keycode == obj.keyCode && obj.keyCode == 17) {
            return item.dataset.location == obj.location
        }
        if (item.dataset.keycode == obj.keyCode && obj.keyCode == 18) {
            return item.dataset.location == obj.location
        }
        return item.dataset.keycode == obj.keyCode
    })

    result.classList.add('active')

    setTimeout(() => {
        result.classList.remove('active')
    }, 300)
}

function catchModifiersEvent(event) {
//    console.log('event', event);

   if (event.getModifierState("Alt") && event.getModifierState("Shift")) {
    if (lang === 'en') {
        getTranslate('ru')
    } else if (lang === 'ru') {
        getTranslate('en')
    }
   }
}

function getTranslate(lng) {
    lang = lng

    arrKeys.forEach((el) => {
        if (Object.keys(keyCodeObj[lng]).includes(el.dataset.keycode)) {
            el.textContent = ''
            el.textContent = keyCodeObj[lng][el.dataset.keycode]
        }
    })
}
