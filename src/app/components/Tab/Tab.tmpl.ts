// ToDo add message status (sending|delivered|was read|error)
// language=hbs
const tabTmpl = () => `
    {{# Link onClick=onMoveToChat outerStyles=styles.tab-link }}
        <div class={{styles.tab}}>
            {{{ IconProfile outerStyles=styles.icon icon=data.icon }}}
            <div class={{styles.caption}} >
                <h3 class={{styles.title}}>{{data.title}}</h3>
                <span class={{styles.last-message}}>{{data.lastMessage.text}}</span>
            </div>
            <div class={{ styles.meta }}>
                <time class={{styles.time}} datetime={{data.lastMessage.time.datetime}}>
                    {{data.lastMessage.time.formatted}}
                </time>
                {{#if data.unread}}
                    <span class={{styles.unread}}>
                <span>
                    {{data.unread}}
                </span>
            </span>
                {{/if}}
            </div>
        </div>
    {{/Link}}
  `;

export default tabTmpl;
