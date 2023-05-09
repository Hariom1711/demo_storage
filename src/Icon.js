import React, { useState, useEffect } from 'react';
import { db } from './db';

function Icon(props) {
  const { name } = props;
  const [iconDataUrl, setIconDataUrl] = useState(undefined);

  useEffect(() => {
    async function fetchIcon() {
      const icon = await db.icons.get({ name });
      if (icon) {
        setIconDataUrl(icon.dataUrl);
      } else {
        console.warn(`Icon not found: ${name}`);
      }
    }
    fetchIcon();
  }, [name]);

  return (
    <img src={iconDataUrl} alt={name} />
  );
}

export default Icon;
