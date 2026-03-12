import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import blogVertigo from "@/assets/blog-vertigo.jpg";
import blogMigraine from "@/assets/blog-migraine.jpg";
import blogNeuro from "@/assets/blog-neurologist.jpg";
import blogBalance from "@/assets/blog-balance.jpg";

const posts = [
  { img: blogVertigo, title: "What Causes Vertigo?", excerpt: "Understanding the common and uncommon causes of vertigo and how they can be effectively treated.", date: "Mar 5, 2026" },
  { img: blogMigraine, title: "How to Prevent Migraine Attacks", excerpt: "Learn evidence-based strategies and lifestyle changes that can help reduce migraine frequency.", date: "Feb 20, 2026" },
  { img: blogNeuro, title: "Signs You Should See a Neurologist", excerpt: "Recognizing the warning signs that indicate it's time to consult a neurological specialist.", date: "Feb 10, 2026" },
  { img: blogBalance, title: "Tips to Improve Balance & Inner Ear Health", excerpt: "Simple exercises and habits that can strengthen your vestibular system and improve balance.", date: "Jan 28, 2026" },
];

const BlogSection = () => (
  <section id="blog" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 uppercase tracking-wide">
          Latest Articles
        </span>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          Health Tips & Insights
        </h2>
        <p className="text-muted-foreground">Stay informed with the latest medical insights from our experts.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300"
          >
            <div className="overflow-hidden h-44">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={12} />
                {p.date}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.excerpt}</p>
              <a href="#" className="text-sm font-medium text-primary hover:underline">Read More →</a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
