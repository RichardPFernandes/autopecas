package com.autopecas.produto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProdutoInitializer implements CommandLineRunner {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public void run(String... args) throws Exception {

        if (produtoRepository.count() == 0) {

            List<Produto> produtos = List.of(
                    new Produto("Filtro de Óleo", "Filtro de óleo de alta performance para motores a gasolina e diesel.", 35.99, "https://www.autobest.co.in/wp-content/uploads/2020/06/Oil-Filter.jpg"),
                    new Produto("Amortecedor", "Amortecedor dianteiro para carros de passeio, modelo universal.", 150.75, "https://www.shockwarehouse.com/images/products/monroe-amortecedor.jpg"),
                    new Produto("Pastilha de Freio", "Pastilhas de freio para veículos de médio porte.", 80.50, "https://www.autozone.com/assets/images/parts/brake-pads.jpg"),
                    new Produto("Bateria Automotiva", "Bateria automotiva de 60Ah, compatível com diversos modelos.", 350.00, "https://www.autobest.co.in/wp-content/uploads/2020/06/Automotive-Battery.jpg"),
                    new Produto("Lâmpada H4", "Lâmpada halógena H4 para faróis de automóveis.", 25.00, "https://cdn2.caraudio.com/media/wysiwyg/products/product-lightbulb-h4.jpg"),
                    new Produto("Óleo Lubrificante 5W30", "Óleo para motores a gasolina e diesel, 1L.", 30.00, "https://www.broncooil.com/images/oil-5w30.jpg"),
                    new Produto("Filtro de Ar", "Filtro de ar automotivo para diversos modelos de veículos.", 45.60, "https://www.autobest.co.in/wp-content/uploads/2020/06/Air-Filter.jpg"),
                    new Produto("Correia Dentada", "Correia dentada para motores 1.8 e 2.0.", 120.00, "https://www.contitech.de/content/dam/corporate/website/product-images/contitech-timing-belt.jpg"),
                    new Produto("Vela de Ignição", "Vela de ignição para motores a gasolina.", 15.90, "https://www.ngkntk.com/global/images/product-page/ignition-spark-plug.jpg"),
                    new Produto("Fluido de Freio", "Fluido de freio para sistemas hidráulicos automotivos.", 25.00, "https://www.valvoline.com/_img/valvoline-brake-fluid.jpg")
            );

            produtoRepository.saveAll(produtos);
            System.out.println("Produtos de peças automotivas cadastrados automaticamente!");
        } else {
            System.out.println("Produtos já estão cadastrados.");
        }
    }
}
