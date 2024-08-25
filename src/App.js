import TouchScrollWrapper from "./TouchScrollWrapper";
import "./styles.css";

export default function ScrollableDiv() {
  return (
    <div style={{ maxWidth: 400 }}>
      <TouchScrollWrapper>
        <div id="scrollable-div" className="scrollable-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium congue sapien. Proin condimentum varius arcu, quis tincidunt
            velit maximus quis. Nam ultricies pulvinar lacus sed luctus. Sed
            finibus lectus eget purus aliquet, a finibus ante auctor. Nulla et
            convallis sem, at fermentum ex. Phasellus vitae dignissim justo.
            Cras tincidunt vitae diam ut interdum. Ut eget elit et nibh maximus
            consequat. Nullam lacinia sapien nunc, at vulputate odio faucibus
            et. Pellentesque vel sollicitudin sem.
          </p>
          <p>
            In hac habitasse platea dictumst. Fusce in tellus dignissim, finibus
            lorem ac, mollis ex. Fusce odio nunc, aliquam ac metus quis,
            pellentesque mollis ligula. In hac habitasse platea dictumst. Nunc
            rhoncus consequat nibh, non luctus urna. In faucibus fringilla dui
            eget egestas. Morbi blandit mollis placerat. Pellentesque ut feugiat
            diam. Fusce congue condimentum lacinia. Donec dignissim ex a lorem
            feugiat porta. Vivamus ornare leo a arcu semper, id semper risus
            efficitur. Nunc egestas massa fringilla justo commodo porta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium congue sapien. Proin condimentum varius arcu, quis tincidunt
            velit maximus quis. Nam ultricies pulvinar lacus sed luctus. Sed
            finibus lectus eget purus aliquet, a finibus ante auctor. Nulla et
            convallis sem, at fermentum ex. Phasellus vitae dignissim justo.
            Cras tincidunt vitae diam ut interdum. Ut eget elit et nibh maximus
            consequat. Nullam lacinia sapien nunc, at vulputate odio faucibus
            et. Pellentesque vel sollicitudin sem.
          </p>
        </div>
      </TouchScrollWrapper>
    </div>
  );
}
