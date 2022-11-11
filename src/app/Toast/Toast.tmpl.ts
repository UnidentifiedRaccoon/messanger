// language=hbs
const toastTmpl = () => `
    <div class="{{styles.toast-line}}">
        <div class="toast {{styles.toast}}">
            <div class="{{styles.content}}">
          <span class="{{styles.error}}">
              {{{ Error }}}
          </span>
                <div class="{{styles.info}}">
                    <h3 class="{{styles.type}}">Ошибка</h3>
                    <span class="{{styles.message}}">{{message}}</span>
                </div>
            </div>
            {{{ Cross typeMode="delete" outerStyles=styles.close-btn }}}
            <div class="{{styles.progress}}"></div>
        </div>
    </div>


`;

export default toastTmpl;
