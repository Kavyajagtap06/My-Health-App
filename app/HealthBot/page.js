import React from 'react';

const HealthBot = () => {
  return (
    <div>
      <h2>HealthBot</h2>

      {(function(d, m){
          var kommunicateSettings = 
              {"appId":"184209b03e12e28c1a8b9bbcb5d239176","popupWidget":true,"automaticChatOpenOnNavigation":true};
          var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
          window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {})}
    </div>
  )
}

export default HealthBot;
