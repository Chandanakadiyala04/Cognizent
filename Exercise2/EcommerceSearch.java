import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearch {
    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return productId + " - " + productName + " [" + category + "]";
        }
    }
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) return products[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Book", "Stationery"),
            new Product(105, "Watch", "Accessories")
        };
        System.out.println("Linear Search:");
        Product found1 = linearSearch(products, "Mobile");
        System.out.println(found1 != null ? found1 : "Product not found");
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        System.out.println("\nBinary Search:");
        Product found2 = binarySearch(products, "Mobile");
        System.out.println(found2 != null ? found2 : "Product not found");
    }
}