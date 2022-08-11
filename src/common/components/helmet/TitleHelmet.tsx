import React from 'react';
import { Helmet } from 'react-helmet-async';

interface TitleHelmetProps {
  title: string;
}

function TitleHelmet({ title }: TitleHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default TitleHelmet;
