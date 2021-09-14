import React from 'react';

type LinkIcon = {
  size: string;
  className: string;
};

export type SocialLink = {
  id: string;
  href: string;
  icon: React.FC<LinkIcon>;
};
