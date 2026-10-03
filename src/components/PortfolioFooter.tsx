const PortfolioFooter = () => {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ujasvi Mudakala. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with 💜
        </p>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
