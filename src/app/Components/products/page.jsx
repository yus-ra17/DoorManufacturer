"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);

  const products = [
    { id: 1, title: "Modern Interior Door", category: "interior" },
    { id: 2, title: "Contemporary Interior Door", category: "interior" },
    { id: 3, title: "Classic Interior Door", category: "interior" },
    { id: 4, title: "Glass Panel Interior Door", category: "interior" },
    { id: 5, title: "Wrought Iron Main Gate", category: "gate" },
    { id: 6, title: "Modern Steel Gate", category: "gate" },
    { id: 7, title: "Automatic Sliding Gate", category: "gate" },
    { id: 8, title: "Wooden Interior Door", category: "interior" },
    { id: 9, title: "French Interior Door", category: "interior" },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="display-4 fw-bold text-dark mb-4">
            Our Premium Collection
          </h1>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`btn ${
                activeCategory === 'all' ? 'btn-success' : 'btn-outline-success'
              } px-4 py-2 rounded-pill`}
              style={{
                backgroundColor: activeCategory === 'all' ? '#02801E' : '',
                borderColor: '#02801E',
                color: activeCategory === 'all' ? 'white' : '#02801E'
              }}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`btn ${
                activeCategory === 'interior' ? 'btn-success' : 'btn-outline-success'
              } px-4 py-2 rounded-pill`}
              style={{
                backgroundColor: activeCategory === 'interior' ? '#02801E' : '',
                borderColor: '#02801E',
                color: activeCategory === 'interior' ? 'white' : '#02801E'
              }}
            >
              Interior Doors
            </button>
            <button
              onClick={() => setActiveCategory('gate')}
              className={`btn ${
                activeCategory === 'gate' ? 'btn-success' : 'btn-outline-success'
              } px-4 py-2 rounded-pill`}
              style={{
                backgroundColor: activeCategory === 'gate' ? '#02801E' : '',
                borderColor: '#02801E',
                color: activeCategory === 'gate' ? 'white' : '#02801E'
              }}
            >
              Main Gates
            </button>
          </div>
        </div>

        <div className="row g-4">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up" 
              data-aos-delay={(index % 3) * 100}
            >
              <div className="card border-0 shadow-lg h-100 overflow-hidden hover-shadow transition-all">
                <div className="ratio ratio-1x1 position-relative">
                  <Image
                    src={`/assets/img/products/${product.id}.jpg`}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fit-cover"
                    quality={85}
                    priority={index < 3} // Prioritize first 3 images
                  />
                </div>
                <div className="card-body text-center bg-white p-4">
                  <h3 className="h5 fw-bold text-dark mb-2">
                    {product.title}
                  </h3>
                  <span 
                    className="badge px-3 py-2"
                    style={{ 
                      backgroundColor: '#02801E',
                      color: 'white',
                      fontSize: '0.9rem'
                    }}
                  >
                    {product.category.replace(/^\w/, c => c.toUpperCase())}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link 
            href="/contact" 
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center"
            style={{ 
              backgroundColor: '#02801E',
              color: 'white',
              transition: 'transform 0.3s ease',
              border: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Get Free Design Consultation
            <i className="bi bi-arrow-right ms-2 fs-5"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGalleryPage;