import java.util.Scanner;
public class FinancialForecasting {
    public static double calculateFutureValue(double initial, double rate, int years) {
        if (years == 0) {
            return initial; 
        }
        return calculateFutureValue(initial, rate, years - 1) * (1 + rate);
    }
    public static double calculateFutureValueMemo(double initial, double rate, int years, double[] memo) {
        if (years == 0) return initial;
        if (memo[years] != 0) return memo[years];
        memo[years] = calculateFutureValueMemo(initial, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter initial investment amount: ");
        double initial = sc.nextDouble();

        System.out.print("Enter annual growth rate (e.g. 0.05 for 5%): ");
        double rate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double result = calculateFutureValue(initial, rate, years);
        System.out.printf("Predicted future value (recursive): %.2f\n", result);

        double[] memo = new double[years + 1];
        double optimizedResult = calculateFutureValueMemo(initial, rate, years, memo);
        System.out.printf("Predicted future value (memoized): %.2f\n", optimizedResult);
    }
}
