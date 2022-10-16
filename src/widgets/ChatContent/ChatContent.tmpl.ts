// language=hbs
const chatContentTmpl = () => `
    <section class={{styles.content}}>
        <h3 class="visually-hidden">
            {{staticData.contentTitle}}
        </h3>
        {{#each days}}
            <!-- wrap all bubbles and messages of the day -->
            <div id="day-wrapper-{{this.day}}">
                <!-- day bubble -->
                <div id="day-bubble-wrapper-{{this.day}}">
                    {{{ Bubble time=this.day }}}
                </div>
                <!-- old messages -->
                {{#each this.read}}
                    {{{ Message context=this }}}
                {{/each}}
                <!-- new bubble -->
                {{#if this.new }}
                    <div id="day-bubble-wrapper-new">
                        {{{ Bubble text=this.new }}}
                    </div>
                {{/if}}
                <!-- old messages -->
                {{#each  this.unread }}
                    {{{ Message context=this }}}
                {{/each}}
            </div>
        {{/each}}
    </section>
`;

export default chatContentTmpl;
