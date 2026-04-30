export type HighlightItem = {
  title: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  problem: string;
  workDone: string;
  outcome: string;
};

export type SiteContent = {
  branding: {
    siteTitle: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    quickIntroTitle: string;
    quickIntroText: string;
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlights: HighlightItem[];
    heroImageUrl: string;
    heroVideoUrl: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    personalStoryTitle: string;
    personalStoryText: string;
    journeyTitle: string;
    journeyText: string;
    valuesTitle: string;
    valuesText: string;
    imageUrl: string;
    videoUrl: string;
  };
  projects: {
    pageTitle: string;
    pageSubtitle: string;
    items: ProjectItem[];
  };
  newsletter: {
    compactTitle: string;
    compactDescription: string;
    compactButtonText: string;
    homeTitle: string;
    homeDescription: string;
    homeButtonText: string;
    aboutTitle: string;
    aboutDescription: string;
    aboutButtonText: string;
  };
};
