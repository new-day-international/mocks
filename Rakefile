task :setup do
  Dir.chdir(File.dirname(__FILE__)) do
    if File.exist?('_site')
      FileUtils::rm_r('_site') 
    end
    Dir.mkdir('_site')
    Dir.chdir('_site') do
      system "git init"
      system "git checkout -b gh-pages"
      system "git remote add origin git@github.com:new-day-international/mocks.git"
      system "git pull origin gh-pages"
    end
  end
end
