// language=hbs
const overlayTmpl = () => `
    <div class="{{styles.overlay}}">
        <div class={{styles.center}}>
            <div data-slot="1"></div>
        </div>
    </div>
`;

export default overlayTmpl;
