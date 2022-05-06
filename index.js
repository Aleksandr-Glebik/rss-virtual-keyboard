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
                <div class="keys" data-keyCode="192">\`</div>
                <div class="keys" data-keyCode="49">1</div>
                <div class="keys" data-keyCode="50">2</div>
                <div class="keys" data-keyCode="51">3</div>
                <div class="keys" data-keyCode="52">4</div>
                <div class="keys" data-keyCode="53">5</div>
                <div class="keys" data-keyCode="54">6</div>
                <div class="keys" data-keyCode="55">7</div>
                <div class="keys" data-keyCode="56">8</div>
                <div class="keys" data-keyCode="57">9</div>
                <div class="keys" data-keyCode="48">0</div>
                <div class="keys" data-keyCode="189">-</div>
                <div class="keys" data-keyCode="187">=</div>
                <div class="keys btn" data-keyCode="8">Backspace</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="9">Tab</div>
                <div class="keys" data-keyCode="81">q</div>
                <div class="keys" data-keyCode="87">w</div>
                <div class="keys" data-keyCode="69">e</div>
                <div class="keys" data-keyCode="82">r</div>
                <div class="keys" data-keyCode="84">t</div>
                <div class="keys" data-keyCode="89">y</div>
                <div class="keys" data-keyCode="85">u</div>
                <div class="keys" data-keyCode="73">i</div>
                <div class="keys" data-keyCode="79">o</div>
                <div class="keys" data-keyCode="80">p</div>
                <div class="keys" data-keyCode="219">[</div>
                <div class="keys" data-keyCode="221">]</div>
                <div class="keys" data-keyCode="220">\\</div>
                <div class="keys btn" data-keyCode="46">Delete</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="20">Caps Lock</div>
                <div class="keys" data-keyCode="65">a</div>
                <div class="keys" data-keyCode="83">s</div>
                <div class="keys" data-keyCode="68">d</div>
                <div class="keys" data-keyCode="70">f</div>
                <div class="keys" data-keyCode="71">g</div>
                <div class="keys" data-keyCode="72">h</div>
                <div class="keys" data-keyCode="74">j</div>
                <div class="keys" data-keyCode="75">k</div>
                <div class="keys" data-keyCode="76">l</div>
                <div class="keys" data-keyCode="186">;</div>
                <div class="keys" data-keyCode="222">'</div>
                <div class="keys btn" data-keyCode="13">Enter</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="16">Shift</div>
                <div class="keys" data-keyCode="90">z</div>
                <div class="keys" data-keyCode="88">x</div>
                <div class="keys" data-keyCode="67">c</div>
                <div class="keys" data-keyCode="86">v</div>
                <div class="keys" data-keyCode="66">b</div>
                <div class="keys" data-keyCode="78">n</div>
                <div class="keys" data-keyCode="77">m</div>
                <div class="keys" data-keyCode="188">,</div>
                <div class="keys" data-keyCode="190">.</div>
                <div class="keys" data-keyCode="191">/</div>
                <div class="keys btn" data-keyCode="38">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-up"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="16">Shift</div>
            </div>
            <div class="row">
                <div class="keys btn" data-keyCode="16">Ctrl</div>
                <div class="keys btn" data-keyCode="#">Fn</div>
                <div class="keys btn" data-keyCode="91">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#windows"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="18">Alt</div>
                <div class="keys space" data-keyCode="32">Space</div>
                <div class="keys btn" data-keyCode="37">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-left"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="40">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-down"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="39">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-right"></use>
                      </svg>
                </div>
                <div class="keys btn" data-keyCode="17">Ctrl</div>
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

// const arrKeyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 17, 91, 18, 32, 18, 17, 37, 40, 39]

document.onkeydown = function(event) {
    // console.log('event', event);
    // console.log('event.code:', event.code);
    // console.log('event.key:', event.key);
    // console.log('event.keyCode:', event.keyCode);

    toggleActiveBtn(event.keyCode, arrKeys)
}

function toggleActiveBtn(el, arr) {
    let result = Array.from(arr).find((item) => {
        return item.dataset.keycode == el
    })

    result.classList.add('active')

    setTimeout(() => {
        result.classList.remove('active')
    }, 300)
}
